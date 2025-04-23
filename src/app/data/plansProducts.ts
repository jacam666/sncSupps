
export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    description?: string;
}

const PlanProducts: Product[] = [
    
    {
        id: 1,
        name: "BESPOKE DIET PLAN",
        price: 30.00,
        images: ["sncImages/diet-plan-image.jpg",],
        description: "I am a level 4 nutritional coach with 30 years experience.\n  Whether you want to lose weight, gain weight or gain muscle, I will draw up a bespoke diet plan to suit you, plus I will be here for any help after and any changes that need to be made. "
    },
    {
        id: 2,
        name: "TRAINING PLANS",        
        price: 30.00,
        images: ["sncImages/training-plan-image.jpg",],
        description: "After owning a gym for 11, years with 30 years experience plus winning more than 30 top level shows. \n I’ve pretty much seen and tried every possible workout.\n Whether you are just beginning or just need something different, I will draw up a training plan to suit you."
    },
];

export default PlanProducts;