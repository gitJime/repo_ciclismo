const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


//Actualizar

router.put("/:id", verify, async (req, res)=>{
if(req.user.id === req.params.id || req.user.isAdmin){
    if (req.body.password){
        req.body.password = CryptoJS.AES.encrypt( 
            req.body.password,  
            process.env.SECRET_KEY
        ).toString();
    }
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set:req.body,
            new: true
        }
    ); 
        res.status(200).json(updateUser);
    } catch(err){
        res.status(500).json(err)
    }
} else{
    res.status(403).json("Puedes actualizar solo tu cuenta")
}
});


//Eliminar
router.put("/find/:id", verify, async (req, res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndUpdate(req.params.id); 
            res.status(200).json("Usuario eliminado");
        } catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("Puedes eliminar solo tu cuenta")
    }
    });

//Consultar
router.put("/find/:id", async (req, res)=> {
    try{
        const user = await User.findById(req.params.id); 
        const {password, ...info } = user._doc;
        res.status(200).json(user);
        } catch(err){
            res.status(500).json(console.error());
        }
    });



//Consultar todo
router.put("/", verify, async (req, res)=> {
    const query = req.query.new;
    if (req.user.isAdmin){
        try {
            const users = query ? await User.find().sort({_id:-1}).limit(2) : await User.find();
            rest.status(200).json (users);
        } catch (err) {
            res.status(500).json(err);
        }
        } else {
        res.status(403).json("No puedes ver todos los usuarios");
        }
});


    

module.exports = router;