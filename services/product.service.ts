import axios from "axios";
import { Product } from "@/types/product";
import { axiosInstance } from "@/app/api/axiosInstance";
import { ROUTES } from "@/constants/endpoints";

export const fetchProducts = async (
  signal?: AbortSignal
): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get(ROUTES.PRODUCTS.FETCH_PRODUCTS, {
      signal, // ✅ Axios 1.x supports AbortSignal
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isCancel(error)) {
      console.log("Request canceled");
    } else {
      console.error("Error fetching products:", error);
    }
    throw new Error("Cannot fetch products");
  }
};
