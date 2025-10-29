"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import Cart from "@/components/Cart";
import { fetchProducts } from "@/services/product.service";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/product";
import useFetchProducts from "@/hooks/use-fetch-products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    total,
  } = useCart();

  const { products, loading, error } = useFetchProducts();

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <main className="flex-1 p-6 grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12 text-gray-500">
                Loading products...
              </div>
            ) : (
              <ProductGrid products={filtered} onAddToCart={addToCart} />
            )}
          </div>
          <div className="lg:col-span-1">
            <Cart
              items={cart}
              subtotal={subtotal}
              discount={discount}
              total={total}
              onRemoveItem={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
