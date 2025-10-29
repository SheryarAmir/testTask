import { useState } from "react";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";
export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      return existing
        ? prev.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = subtotal < 500 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    total,
  };
};
