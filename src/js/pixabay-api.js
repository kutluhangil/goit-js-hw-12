import axios from "axios";

const API_KEY = "54097420-c3256ea2dfff8b14c6496ca25";
const BASE_URL = "https://pixabay.com/api/";

/**
 * Fetches images from Pixabay API
 * @param {string} query - The search query
 * @param {number} page - The page number
 * @param {number} perPage - Items per page
 * @returns {Promise<Object>} - The JSON response data
 */
export async function fetchImages(query, page = 1, perPage = 40) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page: page,
    per_page: perPage,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    // Axios throws for non-2xx responses automatically
    throw new Error(error.response ? error.response.status : error.message);
  }
}
