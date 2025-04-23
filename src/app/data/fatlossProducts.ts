export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    size: string;
    flavour: string;
    slug?: string;
    description?: string;
};

const FatLossproduct: Product[] = [
    {
        id: 1,
        name: "STAGE RIPPED EXTREME",
        slug: "stage-ripped-extreme",
        price: 34.99,
        images: [
            "sncImages/RIPPED-EXTREME-300x300.png",
            "sncImages/staged-ripped-info.jpeg",
        ],
        size: "60 Caps",
        flavour: "",
        description: "Stage Ripped Extreme has been especially formulated to aid in maximum weight loss. \nGiving increased energy and suppressing appetite, for best results take on a calorie reduced diet. \nWarning high caffeine content, use with caution."
    },
    {
        id: 2,
        name: "NO MORE HUNGER",
        slug: "no-more-hunger",
        price: 24.99,
        images: [
            "sncImages/NO-HUNGER-300x300.png",
            "sncImages/nomore-hunger-info.jpeg"
        ],
        size: "90 Caps",
        flavour: "",
        description: "No more hunger has been especially formulated to suppress appetite, it doesn’t contain any form of stimulates so it can be taken later in the evening when food cravings are most likely to kick in. \nNo more hunger is very effective when taken in conjunction with Stage Ripped.\n Stage Ripped is most effective if taken early in the day giving you energy and suppressing appetite throughout the day, once the Stage Ripped wears off you can take No more hunger keeping the fat burning process going in the evening and during the night."
    },
    {
        id: 3,
        name: "STAGE RIPPED",
        slug: "stage-ripped",
        price: 29.99,
        images: [
            "sncImages/Stage-Ripped-CGI-300x300.png",
            "sncImages/staged-ripped-info.jpeg"
        ],
        size: "60 Caps",
        flavour: "",
        description: "Stage Ripped has been especially formulated to aid in weight loss, giving energy, suppressing appetite and increasing body temperature for burning fat. \nFor best results take on a calorie reduced diet."
    },
    {
        id: 4,
        name: "FAT BURNER BUNDLE DEAL",
        slug: "fat-burner-bundle-deal",
        price: 44.99,
        images: [
            "sncImages/fat-burner-bundle.png",
        ],
        size: "",
        flavour: "",
        description: "Torch fat day and night with the ultimate Fat Burner Bundle!\n This powerful duo combines Stage Ripped for all-day energy, appetite control, and fat burning, with No More Hunger to curb cravings in the evening without stimulants. \nPerfect for supporting your weight loss goals 24/7."
    },
]
export default FatLossproduct;