import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product.service";
import { Product } from "@/types/product";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProductsData = async () => {
      try {
        const response = await fetchProducts(controller.signal); //  Pass signal directly
        setProducts(response);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "CanceledError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
