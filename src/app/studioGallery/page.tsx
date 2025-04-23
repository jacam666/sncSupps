
"use client";

import { useState } from "react";
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

  const slides = StudioGallery.map((img) => ({
    src: `/${img.src}`,
    alt: img.alt,
  }));

  return (
    <div className="bg-black min-h-screen py-8 px-4">
      <Navbar />
      <h1 className="text-white text-4xl font-bold text-center mb-8">SNC Studio Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {StudioGallery.map((image, i) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={`/${image.src}`}
              alt={image.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 border-1 bg-[var(--snc-orange)] border-[var(--snc-orange)]"
            />
          </div>
        ))}
      </div>
      

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails]}
      />
      <Footer />
    </div>
    

  );
}
