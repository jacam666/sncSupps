"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import FatLossproduct from "@/app/data/fatlossProducts";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

export default function ProductDetail() {
    const params = useParams();
    const slug = params?.slug;
    const product = FatLossproduct.find((p) => p.slug === slug);

    if (!product) return notFound();

    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product); 
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 py-4">
                <nav className="text-sm text-gray-400">
                    <Link href="/fatLoss" className="hover:text-[var(--snc-orange)] transition-colors">
                        Fat Loss Products
                    </Link>
                    <span className="mx-2">›</span>
                    <span className="text-white">{product.name}</span>
                </nav>
            </div>

            {/* Product Header */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
                    {product.name}
                </h1>
                <div className="w-24 h-1 bg-[var(--snc-orange)] mx-auto rounded-full"></div>
            </div>

            {/* Product Content */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Product Image */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="bg-gradient-to-br from-[var(--snc-orange)] via-[#ffd9b3] to-[#b8860b] rounded-2xl p-8 shadow-2xl">
                                <Image
                                    src={`/${product.images[0]}`}
                                    alt={product.name}
                                    width={400}
                                    height={500}
                                    priority
                                    className="w-full h-auto object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
                            <h2 className="text-2xl font-bold text-white mb-6">Product Details</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                                    <span className="text-gray-300 font-medium">Flavour:</span>
                                    <span className="text-white font-semibold">{product.flavour}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                                    <span className="text-gray-300 font-medium">Size:</span>
                                    <span className="text-white font-semibold">{product.size}</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-gray-300 font-medium">Price:</span>
                                    <span className="text-3xl font-bold text-[var(--snc-orange)]">£{product.price.toFixed(2)}</span>
                                </div>
                            </div>
                            
                            <button
                                onClick={handleAdd}
                                disabled={added}
                                className="w-full mt-8 bg-[var(--snc-orange)] hover:bg-orange-600 disabled:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {added ? "✓ Added to Cart!" : "Add To Cart"}
                            </button>
                        </div>
                    </div>

                    {/* Nutritional Info */}
                    {product.images[1] && (
                        <div className="lg:col-span-1">
                            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
                                <h2 className="text-2xl font-bold text-white mb-6">Nutritional Information</h2>
                                <div className="bg-white rounded-xl p-4">
                                    <Image
                                        src={`/${product.images[1]}`}
                                        alt="Nutrition Info"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Product Description */}
                {product.description && (
                    <div className="mt-12 mb-8">
                        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
                            <h2 className="text-2xl font-bold text-white mb-6">About This Product</h2>
                            <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                {product.description}
                            </div>
                        </div>
                    </div>
                )}

                {/* Back Button */}
                <div className="text-center py-8">
                    <Link
                        href="/fatLoss"
                        className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <span>←</span>
                        <span>Back to Fat Loss Products</span>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
