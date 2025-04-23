"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import ProteinProducts, { Product } from "@/app/data/proteinProducts";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Proteins() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            {/* <h1 className="text-6xl text-white font-bold text-center my-4">Proteins</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:mx-auto gap-6  p-6">
                {ProteinProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="bg-white bg-var rounded-lg shadow-md  overflow-hidden flex flex-col">
            <div className="relative h-64 w-full bg-gradient-to-br from-gray-200 via-slate-200 to-cyan-950 ">
                <img
                    src={`/${product.images[currentImage]}`}
                    alt={product.name}
                    className="w-full h-full object-contain "
                />

                {product.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2  bg-opacity-75 rounded-full p-1"
                        >
                            ◀
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2  bg-opacity-75 rounded-full p-1"
                        >
                            ▶
                        </button>
                    </>
                )}
            </div>
            <div className="p-4 text-gray-900 flex flex-col flex-1">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p>{product.flavour}</p>
                <p>{product.size}</p>
                <p className="text-lg font-bold">£{product.price.toFixed(2)}</p>
            </div>
            <Link href={`/proteins/${product.slug}`} className="bg-[var(--snc-orange)] py-4 text-center mt-auto text-gray-900 text-xl font-bold block">
                Learn More
            </Link>
        </div>
    );
}