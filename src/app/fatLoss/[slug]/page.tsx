"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import FatLossproduct from "@/app/data/fatlossProducts";

interface Params {
    params: { slug: string };
}

export default function ProductDetail() {

    const params = useParams();
    const slug = params?.slug;

    const product = FatLossproduct.find((p) => p.slug === slug);

    if (!product) return notFound();

    return (
        <div className="bg-black min-h-full  max-w-full">
            <Navbar />
            <h1 className=" text-white text-3xl font-bold mb-4 text-center my-8 p-6">{product.name}</h1>

            <div className="flex flex-col sm:flex-row  justify-evenly items-center gap-4 p-4">
                <div className="flex flex-col sm:flex-row">
                    <Image
                        src={`/${product.images[0]}`}
                        alt={product.name}
                        width={400}
                        height={400}
                        priority
                        className="rounded-lg object-contain"
                    />
                    <div className="flex flex-col sm:justify-center  text-white text-center">
                        <p><span className="font-semibold">Flavour:</span> {product.flavour}</p>
                        <p><span className="font-semibold">Size:</span> {product.size}</p>
                        <p className="text-xl font-bold mt-4">£{product.price.toFixed(2)}</p>
                    </div>
                </div>
                {product.images[1] && (
                    <div className="">
                        <h2 className="text-xl font-semibold mb-2">Nutritional Info</h2>
                        <Image
                            src={`/${product.images[1]}`}
                            alt="Nutrition Info"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain"
                        />
                    </div>
                )}
            </div>
            {product.description && (
                <div className="bg-black text-white text-sm leading-relaxed mb-8  mt-6 px-6 py-4 rounded-lg max-w-3xl mx-6 sm:mx-auto whitespace-pre-line shadow-md border border-[var(--snc-orange)]">
                    {product.description}
                </div>
            )}
            <div className="my-4 text-center ">
                <Link
                    href="/fatLoss"
                    className="bg-[var(--snc-orange)] text-gray-900 px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Back to Fat Loss Products
                </Link>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
}
