import axios from "axios";

const API_URL = "https://medium.com/@yuvrajsmuley";
export async function getArticles() {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw Error("Failed to get Articles");
  }
}
