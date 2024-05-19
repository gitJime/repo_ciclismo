// src/api.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies", error);
    throw error;
  }
};
