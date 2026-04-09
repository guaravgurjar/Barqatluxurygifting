import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URL + "/api";

// Static fallback in case API is down
const STATIC_PRODUCTS = [
  {
    id: "1",
    name: "Royal Festive Celebration Hamper",
    price: 8499,
    description: "A vibrant, hand-assembled festive hamper in a luxurious pink basket.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/4jktw50b_Poduct%20%281%29.jpeg",
    category: "Festive Gifting",
    badge: "Bestseller",
    in_stock: true,
  },
];

let cachedProducts = null;

export function useProducts() {
  const [products, setProducts] = useState(cachedProducts || []);
  const [loading, setLoading] = useState(!cachedProducts);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedProducts) return;
    let cancelled = false;
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API}/products`);
        if (!cancelled) {
          cachedProducts = data;
          setProducts(data);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchProducts();
    return () => { cancelled = true; };
  }, []);

  return { products, loading, error };
}

export function invalidateProductCache() {
  cachedProducts = null;
}
