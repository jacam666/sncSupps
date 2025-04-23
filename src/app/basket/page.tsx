"use client";

import { useCart } from "@/app/context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function BasketPage() {
  const { cart } = useCart();

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <h1 className="text-4xl font-bold text-center my-8">Your Basket</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your basket is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6 px-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded shadow"
            >
              <Image
                src={`/${item.images[0]}`}
                alt={item.name}
                width={100}
                height={100}
                className="rounded bg-white object-contain"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.flavour}</p>
                <p>{item.size}</p>
                <p className="font-bold">£{item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}
