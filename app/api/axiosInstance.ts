import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Added protocol (required)
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});
