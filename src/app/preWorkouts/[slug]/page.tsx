"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import PreworkoutProducts from "@/app/data/preworkoutProducts";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

export default function ProductDetail() {
    const params = useParams();
    const slug = params?.slug;
    const product = PreworkoutProducts.find((p) => p.slug === slug);

    if (!product) return notFound();

    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
            <Navbar />
            
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 pt-28 pb-4">
                <nav className="text-sm text-gray-600">
                    <Link href="/" className="hover:text-orange-600 transition-colors">
                        Home
                    </Link>
                    <span className="mx-2">›</span>
                    <Link href="/preWorkouts" className="hover:text-orange-600 transition-colors">
                        Pre-Workout Products
                    </Link>
                    <span className="mx-2">›</span>
                    <span className="text-orange-600 font-medium">{product.name}</span>
                </nav>
            </div>

            {/* Product Header */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                        {product.name}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                        Premium pre-workout supplement for explosive energy and focus
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Product Content */}
            <div className="max-w-7xl mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left Column - Product Images */}
                    <div className="space-y-8">
                        {/* Main Product Image */}
                        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
                            <div className="bg-gradient-to-br from-orange-400 via-orange-300 to-amber-200 p-8">
                                <div className="relative">
                                    <Image
                                        src={`/${product.images[0]}`}
                                        alt={product.name}
                                        width={500}
                                        height={600}
                                        priority
                                        className="w-full h-auto object-contain drop-shadow-lg"
                                    />
                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
                                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
                                </div>
                            </div>
                            <div className="h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
                        </div>

                        {/* Nutritional Information */}
                        {product.images[1] && (
                            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Nutritional Information
                                </h3>
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <Image
                                        src={`/${product.images[1]}`}
                                        alt="Nutrition Facts"
                                        width={500}
                                        height={400}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="space-y-8">
                        {/* Product Info Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8">
                            <div className="space-y-6">
                                {/* Price */}
                                <div className="text-center pb-6 border-b border-gray-200">
                                    <div className="text-5xl font-bold text-gray-800 mb-2">
                                        £{product.price.toFixed(2)}
                                    </div>
                                    <div className="text-gray-600">Premium Pre-Workout Formula</div>
                                </div>

                                {/* Product Properties */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                            <span className="font-semibold text-gray-700">Flavour</span>
                                        </div>
                                        <span className="text-orange-700 font-bold">{product.flavour}</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                            <span className="font-semibold text-gray-700">Size</span>
                                        </div>
                                        <span className="text-orange-700 font-bold">{product.size}</span>
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={handleAdd}
                                    disabled={added}
                                    className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                                        added
                                            ? 'bg-green-500 text-white cursor-not-allowed'
                                            : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                                    }`}
                                >
                                    <span className="flex items-center justify-center space-x-2">
                                        {added ? (
                                            <>
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Added to Cart!</span>
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                                <span>Add to Cart</span>
                                            </>
                                        )}
                                    </span>
                                </button>

                                {/* Continue Shopping */}
                                <Link 
                                    href="/preWorkouts"
                                    className="block w-full text-center border-2 border-orange-500 text-orange-600 hover:bg-orange-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                                >
                                    ← Back to Pre-Workout Products
                                </Link>
                            </div>
                        </div>

                        {/* Key Benefits */}
                        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Key Benefits
                            </h3>
                            <div className="space-y-3">
                                {[
                                    "Enhanced energy and endurance",
                                    "Improved focus and mental clarity",
                                    "Increased strength and power output",
                                    "Better muscle pumps and vascularity",
                                    "Fast-acting formula for immediate results"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                {product.description && (
                    <div className="mt-12">
                        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                About This Product
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                                    {product.description}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            <Footer />
        </div>
    );
}
