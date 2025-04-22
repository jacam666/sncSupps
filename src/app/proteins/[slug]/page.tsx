"use client";

import { notFound, useParams } from "next/navigation";
import ProteinProducts from "@/app/data/proteinProducts";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { usePageLeave } from "@mantine/hooks";
import Link from "next/link";

interface Params {
  params: { slug: string };
}

export default function ProductDetail() {

  const params = useParams();
  const slug = params?.slug;

  const product = ProteinProducts.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div className="bg-black min-h-full  max-w-full">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 text-center my-8 p-6">{product.name}</h1>

      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4 p-4">
        <div className="">
          <Image
            src={`/${product.images[0]}`}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />
          <div className="flex flex-col  text-white text-center">
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
      <div className="mt-8 text-center">
          <Link
            href="/proteins"
            className="bg-[var(--snc-orange)] text-gray-900 px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Back to Proteins
          </Link>
        </div>
    </div>
  );
}
