import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-backend-fg40.onrender.com"
});