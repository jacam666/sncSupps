
export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    size: string;
    flavour: string;
    slug: string;
    description?: string;
}

const PreworkoutProducts: Product[] = [
    {
        id: 1,
        name: "B4 EXTREME",
        slug: "b4-extreme-candy",
        price: 24.99,
        images: [
            "sncImages/b4-candy-extreme-300x300.png",
            "sncImages/b4-extreme-info.jpeg",
        ],
        flavour: "COTTON CANDY",
        size: "30 servings",
        description: "DIRECTIONS OF USE \n Mix one scoop(5g) with 250ml of chilled water.\nStir or shake vigorously for 30 seconds using a shaker.\nFor accurate measure please revert to weighing scales using scoop provided.\nConsume 30 minutes before intense exercise.\nDrink at least 8 glasses of water daily when in use.\nWARNINGS:\n High caffeine content, refer to ingredient breakdown before use, always assess tolerance. \nKeep out of reach of children.\nDo not use ether pregnant or nursing.\nDo not use if you have a family history of high blood pressure, heart attacks, liver, thyroid or psychiatric diseases not suitable for persons under the age of 18 years. \nSTORAGE ADVICE:\nClose tub after use and store in a cool dry place.",
    },
    {
        id: 2,
        name: "B4 EXTREME",
        slug: "b4-extreme-raspberry",
        price: 24.99,
        images: [
            "sncImages/cap-b4pre-blue-300x300 copy1.png",
            "sncImages/b4-extreme-info.jpeg",
        ],
        flavour: "BLUE RASPBERRY",
        size: "30 servings",
        description: "DIRECTIONS OF USE \n Mix one scoop(5g) with 250ml of chilled water.\nStir or shake vigorously for 30 seconds using a shaker.\nFor accurate measure please revert to weighing scales using scoop provided.\nConsume 30 minutes before intense exercise.\nDrink at least 8 glasses of water daily when in use.\nWARNINGS:\n High caffeine content, refer to ingredient breakdown before use, always assess tolerance. \nKeep out of reach of children.\nDo not use ether pregnant or nursing.\nDo not use if you have a family history of high blood pressure, heart attacks, liver, thyroid or psychiatric diseases not suitable for persons under the age of 18 years. \nSTORAGE ADVICE:\nClose tub after use and store in a cool dry place.",
    },
    {
        id: 3,
        name: "B4 TRAIN",
        slug: "b4-train-berry",
        price: 24.99,
        images: [
            "sncImages/B4-Rio-berry-300x300.png",
            "sncImages/b4-train-nutri-info.jpeg"
        ],
        flavour: "RIO BERRY",
        size: "",
        description: "DIRECTIONS FOR USE\n Mix 1 flat scoop with 250ml water. \nConsume within 20-30 minutes prior training. \n375g provides 30 x 12.5g servings. \nADVICE / WARNINGS \nKeep out of reach of children. \nOnce mixed keep chilled and consume within 3 hours. \nManufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish, fish, peanuts, nuts seeds, celery, lupin and molluscs. \nNot suitable for persons under the age of 18 years.\n STORAGE ADVICE \nClose tub after use. Store in a cool dry place.",
    },
    {
        id: 4,
        name: "B4 TRAIN",
        slug: "b4-train-tropical",
        price: 24.99,
        images: [
            "sncImages/B4-tropical-gummy-300x300.png",
            "sncImages/b4-train-nutri-info.jpeg"
        ],
        flavour: "TROPICAL GUMMY",
        size: "",
        description: "DIRECTIONS FOR USE\n Mix 1 flat scoop with 250ml water. \nConsume within 20-30 minutes prior training. \n375g provides 30 x 12.5g servings. \nADVICE / WARNINGS \nKeep out of reach of children. \nOnce mixed keep chilled and consume within 3 hours. \nManufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish, fish, peanuts, nuts seeds, celery, lupin and molluscs. \nNot suitable for persons under the age of 18 years.\n STORAGE ADVICE \nClose tub after use. Store in a cool dry place.",
    },
    {
        id: 5,
        name: "STAGE PUMP",
        slug: "stage-pump-strawberry-lime",
        price: 29.99,
        images: [
            "sncImages/cap-stagepump-strawberry-lime-300x300.png",
            "sncImages/stage-pump-info.png"
        ],
        flavour: "STRAWBERRY and LIME",
        size: "",
        description: "Stage pump is specially formulated to give mind blowing pumps, focus and increased vascularity. \n Stage pump can be taken 20-30 minutes before a workout and can also be used before stepping on stage for a full vascular look."
    },
    {
        id: 6,
        name: "STAGE PUMP",
        slug: "stage-pump-blue",
        price: 29.99,
        images: [
            "sncImages/STAGE-PUMP-BLUE-FOR-WEB-300x300.png",
            "sncImages/stage-pump-info.png"
        ],
        flavour: "BLUE RASPBERRY",
        size: "",
        description: "Stage pump is specially formulated to give mind blowing pumps, focus and increased vascularity. \n Stage pump can be taken 20-30 minutes before a workout and can also be used before stepping on stage for a full vascular look."
    },
]

export default PreworkoutProducts;