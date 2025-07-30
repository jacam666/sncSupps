"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-8 px-4 lg:px-8"> {/* Added pt-24 to account for fixed navbar */}
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              SNC <span className="text-orange-500">Supplements</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium supplements designed to help you achieve your fitness goals
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Link href="/proteins" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/sncImages/snc-products_edited.jpg"
                    alt="protein image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-orange-500 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Great tasting protein
                  </h3>
                  <p className="text-white text-base leading-relaxed">
                    SNC Supplements are a range of products designed to help you achieve your fitness goals.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/preWorkouts" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/sncImages/CarouselStageB4Pump_edited.jpg"
                    alt="pre-workout image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-orange-500 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Effective pre-workouts
                  </h3>
                  <p className="text-white text-base leading-relaxed">
                    Unleash your full potential with our premium pre-workouts, designed to elevate your exercise routine.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/proteins" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/sncImages/CarouselOnlyWheyPromotion_edited.jpg"
                    alt="whey protein image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-orange-500 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    The Only Whey protein shake
                  </h3>
                  <p className="text-white text-base leading-relaxed">
                    Each serving delivers up to 24% protein from instantized whey protein concentrate.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/fatLoss" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/sncImages/homepage-snc-display-image2_edited.jpg"
                    alt="product range image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-orange-500 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Wide range of products
                  </h3>
                  <p className="text-white text-base leading-relaxed">
                    We have products ranging from proteins and pre-workouts to fat burners.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
