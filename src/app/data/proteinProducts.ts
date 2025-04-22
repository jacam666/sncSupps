
export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    size: string;
    flavour: string;
    slug: string;
}

const ProteinProducts: Product[] = [
    {
        id: 1,
        slug: "the-only-whey-protein-2-2kg",
        name: 'THE ONLY WHEY PROTEIN',
        price: 39.99,
        images: [
            "sncImages/only-whey-final-300x300.png",
            "sncImages/only-whey-nutritional-info.jpeg"
        ],
        flavour: "",
        size: "2.2 Kg",
    },
    {
        id: 2,
        name: 'THE ONLY WHEY PROTEIN',
        slug: "the-only-whey-protein-908g",
        price: 29.99,
        images: [
            "sncImages/only-whey-final-300x300.png",
            "sncImages/only-whey-nutritional-info.jpeg"
        ],
        flavour: "",
        size: "908g",
    },
    {
        id: 3,
        name: "AFTER TRAIN ADVANCED",
        slug: "after-train-advanced-strawberry-2kg",
        price: 39.99,
        images: [
            "sncImages/advanced-aftertrain-strawberrylime-300x300.png",
            "sncImages/after-train-advanced-nutrition.jpeg",
        ],
        flavour: "Strawberry and Lime",
        size: "2Kg"
    },
    {
        id: 4,
        name: "AFTER TRAIN ADVANCED",
        slug: "after-train-advanced-candy-2kg",
        price: 39.99,
        images: [
            "sncImages/AFTER-TRAIN-ADVANCED-300x300.png",
            "sncImages/after-train-advanced-nutrition.jpeg",
        ],
        flavour: "Blue Candy Flavour",
        size: "2Kg"
    },
    {
        id: 5,
        name: "AFTER TRAIN ADVANCED",
        slug: "after-train-advanced-mango-2kg",
        price: 39.99,
        images: [
            "sncImages/orange-mango-advanced-aftertrain-for-web-300x300.png",
            "sncImages/after-train-nutri-info.jpeg"
        ],
        flavour: "Orange Mango Flavour",
        size: "2Kg"
    },
    {
        id: 6,
        name: "AFTER TRAIN",
        slug: "after-train-fruit-2kg",
        price: 24.99,
        images: [
            "sncImages/1After_Train_Fruit_Punch-1-300x300.png",
            "sncImages/after-train-nutri-info.jpeg",
        ],
        flavour: "Fruit Punch",
        size: "908g"
    },
    {
        id: 7,
        name: "AFTER TRAIN",
        slug: "after-train-raspberry-2kg",
        price: 24.99,
        images: [
            "sncImages/2After_Train_Raspberry-1-300x300.png",
            "sncImages/after-train-nutri-info.jpeg"
        ],
        flavour: "Raspberry",
        size: "908g"
    },
    {
        id: 8,
        name: "AFTER TRAIN",
        slug: "after-train-apple-2kg",
        price: 24.99,
        images: [
            "sncImages/apple-aftertrain-300x300.png",
            "sncImages/after-train-nutri-info.jpeg",
        ],
        flavour: "Apple",
        size: "908g"
    },
    {
        id: 9,
        name: "AFTER TRAIN",
        slug: "after-train-orange-2kg",
        price: 24.99,
        images: [
            "sncImages/3After_Train_Orange-1-300x300.png",
            "sncImages/after-train-nutri-info.jpeg"
        ],
        flavour: "Orange",
        size: "908g"
    },
];

export default ProteinProducts;