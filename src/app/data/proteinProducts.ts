
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
        size: "2Kg",
        description: "After Train Advanced has been specially formulated to aid recovery straight after a workout. \nWIth the very best ingredients 100% whey protein isolate, cyclic dextrin, creatine and glutamine makes this one of the best all in one recovery drinks on the market. With it’s easy to mix formula and superb flavour it is amazingly refreshing and easy to drink after them hard gruelling workouts. Suitable for vegetarian’s."
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
        size: "2Kg",
        description: "After Train Advanced has been specially formulated to aid recovery straight after a workout. \nWIth the very best ingredients 100% whey protein isolate, cyclic dextrin, creatine and glutamine makes this one of the best all in one recovery drinks on the market. With it’s easy to mix formula and superb flavour it is amazingly refreshing and easy to drink after them hard gruelling workouts. Suitable for vegetarian’s."
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
        size: "2Kg",
        description: "After Train Advanced has been specially formulated to aid recovery straight after a workout. \nWIth the very best ingredients 100% whey protein isolate, cyclic dextrin, creatine and glutamine makes this one of the best all in one recovery drinks on the market. With it’s easy to mix formula and superb flavour it is amazingly refreshing and easy to drink after them hard gruelling workouts. Suitable for vegetarian’s."
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
        size: "908g",
        description: "After Train has been specially formulated to aid recovery straight after a workout. with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts. After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarian’s."
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
        size: "908g",
        description: "After Train has been specially formulated to aid recovery straight after a workout. \nwith its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. \nEasy to mix formula and superb flavours, it is amazingly refreshing and easy to drink after them hard gruelling workouts. \nAfter Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. \nSuitable for vegetarian’s."
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
        size: "908g",
        description: "After Train has been specially formulated to aid recovery straight after a workout. \nwith its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. \nEasy to mix formula and superb flavours, it is amazingly refreshing and easy to drink after them hard gruelling workouts. \nAfter Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. \nSuitable for vegetarian’s."
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
        size: "908g",
        description: "After Train has been specially formulated to aid recovery straight after a workout. \nwith its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. \nEasy to mix formula and superb flavours, it is amazingly refreshing and easy to drink after them hard gruelling workouts. \nAfter Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. \nSuitable for vegetarian’s."
    },
];

export default ProteinProducts;