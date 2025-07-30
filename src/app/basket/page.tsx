"use client";

import { useCart } from "@/app/context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BasketPage() {
  const { cart, removeFromCart, addToCart } = useCart();
  const [processingItems, setProcessingItems] = useState<Set<number>>(new Set());

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 4.99; // Free shipping over £50
  const total = subtotal + shipping;

  const updateQuantity = async (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveItem(itemId);
      return;
    }

    setProcessingItems(prev => new Set(prev).add(itemId));
    
    // Simulate processing delay
    setTimeout(() => {
      const item = cart.find(item => item.id === itemId);
      if (item) {
        // Remove all quantities first
        removeFromCart(itemId);
        // Add back the correct quantity
        for (let i = 0; i < newQuantity; i++) {
          addToCart(item);
        }
      }
      setProcessingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 300);
  };

  const handleRemoveItem = (itemId: number) => {
    setProcessingItems(prev => new Set(prev).add(itemId));
    setTimeout(() => {
      removeFromCart(itemId);
      setProcessingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="text-center pt-32 pb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Your <span className="text-orange-500">Basket</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {cart.length === 0 
            ? "Your basket is empty. Start shopping for premium supplements!" 
            : `${cart.length} item${cart.length > 1 ? 's' : ''} in your basket`
          }
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {cart.length === 0 ? (
        /* Empty Basket State */
        <div className="max-w-4xl mx-auto px-6 text-center pb-20">
          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-12">
            <div className="mb-8">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Your basket is empty</h2>
              <p className="text-gray-600 text-lg mb-8">Discover our premium supplements to start your fitness journey</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/proteins" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Proteins
              </Link>
              <Link href="/preWorkouts" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Pre-Workouts
              </Link>
              <Link href="/fatLoss" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Fat Loss
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Basket Items */
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 via-orange-300 to-amber-200 rounded-xl p-4 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
                          <Image
                            src={`/${item.images[0]}`}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                            
                            {/* Product Properties */}
                            <div className="space-y-1 mb-4">
                              {item.flavour && (
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                  <span className="font-medium">Flavour:</span>
                                  <span className="text-orange-700">{item.flavour}</span>
                                </div>
                              )}
                              {item.size && (
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                  <span className="font-medium">Size:</span>
                                  <span className="text-orange-700">{item.size}</span>
                                </div>
                              )}
                            </div>

                            {/* Price */}
                            <div className="text-3xl font-bold text-gray-800">
                              £{item.price.toFixed(2)}
                              {item.quantity > 1 && (
                                <span className="text-lg text-gray-500 ml-2">
                                  (£{(item.price * item.quantity).toFixed(2)} total)
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={processingItems.has(item.id)}
                                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors duration-200 disabled:opacity-50"
                              >
                                -
                              </button>
                              
                              <span className="w-12 text-center font-semibold text-lg">
                                {processingItems.has(item.id) ? (
                                  <svg className="animate-spin h-5 w-5 text-orange-500 mx-auto" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                ) : (
                                  item.quantity
                                )}
                              </span>
                              
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={processingItems.has(item.id)}
                                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors duration-200 disabled:opacity-50"
                              >
                                +
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              disabled={processingItems.has(item.id)}
                              className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200 disabled:opacity-50"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6 sticky top-32">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">£{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `£${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-sm text-gray-500 bg-orange-50 p-3 rounded-lg">
                      💡 Spend £{(50 - subtotal).toFixed(2)} more for FREE shipping!
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">Total</span>
                      <span className="text-xl font-bold text-orange-600">£{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4">
                  Proceed to Checkout
                </button>

                {/* Continue Shopping */}
                <Link href="/" className="block w-full text-center border-2 border-orange-500 text-orange-600 hover:bg-orange-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300">
                  Continue Shopping
                </Link>

                {/* Security Badge */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2zm10-12V9a4 4 0 00-8 0v2m0 6h.01" />
                    </svg>
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
