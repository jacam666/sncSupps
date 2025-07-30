
"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import StudioGallery from "@/app/data/studioGallery";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = StudioGallery.map((img) => ({
    src: `/${img.src}`,
    alt: img.alt,
  }));

  const openLightbox = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  // Enhanced data for immersive experience
  const immersiveData = StudioGallery.map((item, index) => ({
    ...item,
    id: index,
    title: [
      "Power & Strength",
      "Cardio Excellence", 
      "Functional Training",
      "Performance Zone",
      "Recovery Space",
      "Equipment Mastery",
      "Training Excellence",
      "Workout Innovation",
      "Fitness Evolution"
    ][index] || `Training Area ${index + 1}`,
    subtitle: [
      "Where strength meets determination",
      "Elevate your cardiovascular fitness",
      "Move with purpose and precision",
      "Peak performance starts here",
      "Rest, recover, and recharge",
      "Professional-grade equipment",
      "Expert guidance and coaching",
      "Innovation meets tradition",
      "Transform your fitness journey"
    ][index] || "Experience world-class training",
    description: item.caption || "State-of-the-art facilities designed for your success."
  }));

  // Auto-advance functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling) {
        setCurrentImageIndex((prev) => (prev + 1) % immersiveData.length);
      }
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isScrolling, immersiveData.length]);

  // Handle scroll events to pause auto-advance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % immersiveData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + immersiveData.length) % immersiveData.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Main Content with top padding for fixed navbar */}
      <div className="pt-20"> {/* Added pt-20 to account for fixed navbar */}
      
      {/* Hero Section with Full-Screen Images */}
      <div className="relative h-screen overflow-hidden">
        {/* Image Container */}
        <div className="absolute inset-0">
          {immersiveData.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={`/${item.src}`}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-4xl px-6">
            <div className="transform transition-all duration-1000 ease-out">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="block text-white mb-2">SNC</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  STUDIO
                </span>
              </h1>
              
              <div className="h-32 flex items-center justify-center">
                <div 
                  key={currentImageIndex}
                  className="animate-fade-in-up"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-300">
                    {immersiveData[currentImageIndex]?.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-200 mb-6">
                    {immersiveData[currentImageIndex]?.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                <button 
                  onClick={() => openLightbox(currentImageIndex)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
                >
                  Explore Gallery
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                  Book Training
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-6 flex items-center z-30">
          <button
            onClick={prevImage}
            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-4 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-6 flex items-center z-30">
          <button
            onClick={nextImage}
            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-4 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {immersiveData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50 z-30">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-1000 ease-out"
            style={{ width: `${((currentImageIndex + 1) / immersiveData.length) * 100}%` }}
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-30">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div> 
        </div>
      </div>

      {/* Immersive Gallery Section */}
      <div className="bg-gradient-to-b from-black to-gray-900">
        {immersiveData.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Full-Width Image Section */}
            <div className="h-screen relative overflow-hidden group">
              <img
                src={`/${item.src}`}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              
              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"></div>
              
              {/* Content Panel */}
              <div className="absolute inset-0 flex items-center z-10">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Text Content */}
                  <div className={`text-white space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-4">
                      {/* <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                        Area {index + 1}
                      </div> */}
                      <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-2xl text-orange-300 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                    
                    <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                    
                    <div className="flex space-x-4 pt-4">
                      <button 
                        onClick={() => openLightbox(index)}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105"
                      >
                        View Details
                      </button>
                      {/* <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                        Learn More
                      </button> */}
                    </div>
                  </div>
                  
                  {/* Interactive Image Preview */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div 
                      className="relative cursor-pointer group/preview"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-500/30">
                        <img
                          src={`/${item.src}`}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Enlarge Icon */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-2xl text-orange-100 mb-12">
            Experience the ultimate training environment at SNC Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-orange-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-colors duration-300 shadow-2xl">
              Start Your Journey
            </button>
            <a href="/contact" className="flex justify-center">
              <button className="border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-orange-600 transition-colors duration-300">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails]}
      />
      </div> {/* Close the pt-20 container */}
      
      <Footer />
    </div>
  );
}
