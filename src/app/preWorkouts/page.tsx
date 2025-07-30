"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Workoutproducts, { Product } from "@/app/data/preworkoutProducts";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function PreWorkouts() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
            <Navbar />
            
            {/* Page Header */}
            <div className="text-center pt-32 pb-12 px-4"> {/* Added pt-32 to account for fixed navbar */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                    Premium <span className="text-orange-500">Pre-Workouts</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Unleash your full potential with our premium pre-workouts designed to elevate your exercise routine
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Workoutproducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [currentImage, setCurrentImage] = useState(0);
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAdding(true);
        
        // Add a small delay for visual feedback
        setTimeout(() => {
            addToCart(product);
            setIsAdding(false);
        }, 300);
    };

    return (
        <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group border border-orange-100 transform hover:-translate-y-2">
            {/* Product Image with Enhanced Styling */}
            <div className="relative h-72 w-full bg-gradient-to-br from-orange-400 via-orange-300 to-amber-200 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
                
                {/* Scrolling Images Container */}
                <div className="relative z-10 h-full w-full overflow-hidden">
                    <div 
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${currentImage * 100}%)`
                        }}
                    >
                        {product.images.map((image, index) => (
                            <div 
                                key={index} 
                                className="w-full h-full flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={`/${image}`}
                                    alt={`${product.name} - Image ${index + 1}`}
                                    className="max-w-full max-h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/30 rounded-full blur-sm"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>

                {product.images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 rounded-full p-3 shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm z-20"
                        >
                            <span className="text-sm font-bold">‹</span>
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 rounded-full p-3 shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm z-20"
                        >
                            <span className="text-sm font-bold">›</span>
                        </button>
                    </>
                )}
                
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    £{product.price.toFixed(2)}
                </div>

                {/* Image Indicators */}
                {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {product.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setCurrentImage(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentImage 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white/50 hover:bg-white/80'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Product Info Section */}
            <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 mb-3">
                        {product.name}
                    </h2>
                    
                    {/* Product Details with Icons */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-2 text-gray-700">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="font-medium">Flavour:</span>
                            <span className="text-orange-700 font-semibold">{product.flavour}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-gray-700">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="font-medium">Size:</span>
                            <span className="text-orange-700 font-semibold">{product.size}</span>
                        </div>
                    </div>
                </div>

                {/* Gradient Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent my-4"></div>
                
                {/* Price Display */}
                <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-gray-800">£{product.price}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdding}
                        className={`w-full py-4 px-6 rounded-xl text-center font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                            isAdding
                                ? 'bg-green-500 text-white cursor-not-allowed'
                                : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                        }`}
                    >
                        <span className="flex items-center justify-center space-x-2">
                            {isAdding ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Adding...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                    </svg>
                                    <span>Add to Cart</span>
                                </>
                            )}
                        </span>
                    </button>
                    
                    <Link 
                        href={`/preWorkouts/${product.slug}`} 
                        className="block w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 py-3 px-6 rounded-xl text-center font-semibold transition-all duration-300"
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <span>Learn More</span>
                            <span className="text-xl">→</span>
                        </span>
                    </Link>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
        </div>
    );
}