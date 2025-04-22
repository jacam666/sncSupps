"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    size: string;
    flavour: string;
}


const Workoutproducts: Product[] = [
    {
        id: 1,
        name: "B4 EXTREME",
        price: 24.99,
        images: [
            "sncImages/b4-candy-extreme-300x300.png",
            "sncImages/b4-extreme-intro.jpeg",
        ],
        flavour: "COTTON CANDY",
        size: "",
    },
    {
        id: 2,
        name: "B4 EXTREME",
        price: 24.99,
        images: [
            "sncImages/cap-b4pre-blue-300x300 copy1.png",
            "sncImages/b4-extreme-intro.jpeg",
        ],
        flavour: "BLUE RASPBERRY",
        size: "",
    },
    {
        id: 3,
        name: "B4 TRAIN",
        price: 24.99,
        images: [
            "sncImages/B4-Rio-berry-300x300.png",
            "sncImages/b4-train-nutri-info.jpeg"
        ],
        flavour: "RIO BERRY",
        size: "",
    },
    {
        id: 4,
        name: "B4 TRAIN",
        price: 24.99,
        images: [
            "sncImages/B4-tropical-gummy-300x300.png",
            "sncImages/b4-train-nutri-info.jpeg"
        ],
        flavour: "TROPICAL GUMMY",
        size: "",
    },
    {
        id: 5,
        name: "STAGE PUMP",
        price: 29.99,
        images: [
            "sncImages/cap-stagepump-strawberry-lime-300x300.png",
            "sncImages/stage-pump-nutri-info.jpeg"
        ],
        flavour: "STRAWBERRY and LIME",
        size: "",
    },
    {
        id: 6,
        name: "STAGE PUMP",
        price: 29.99,
        images: [
            "sncImages/STAGE-PUMP-BLUE-FOR-WEB-300x300.png",
            "sncImages/stage-pump-nutri-info.jpeg"
        ],
        flavour: "BLUE RASPBERRY",
        size: "",
    },
]

export default function PreWorkouts() {
    return (
        <div className="bg-gray-800 min-h-screen">
            <Navbar />
            <h1 className="text-6xl text-white font-bold text-center my-4">Pre-Workouts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:mx-auto gap-6  p-6">
                {Workoutproducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
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
                    className="w-full h-full object-contain"
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
            <p className="bg-[var(--snc-orange)] py-4 text-center mt-auto text-gray-900 text-xl font-bold">Learn More</p>

        </div>
    );
}