
import { Carousel } from '@mantine/carousel';
import { Card, Group, Image, Text } from '@mantine/core';
import classes from './CarouselCard.module.css';


type Product = {
    id: number;
    name: string;
    price: number;
    images: string[];
    size: string;
    flavour: string;
};

const ProteinProducts: Product[] = [
    {
        id: 1,
        name: 'THE ONLY WHEY PROTEIN',
        price: 39.99,
        images: [
            'sncImages/only-whey-final-300x300.png',
            'sncImages/only-whey-alt-1.png',
        ],
        flavour: '',
        size: '2.2 Kg',
    },
    {
        id: 2,
        name: 'THE ONLY WHEY PROTEIN',
        price: 29.99,
        images: [
            'sncImages/only-whey-final-300x300.png',
            'sncImages/only-whey-alt-2.png',
        ],
        flavour: '',
        size: '908g',
    },
    {
        id: 3,
        name: 'AFTER TRAIN ADVANCED',
        price: 39.99,
        images: [
            'sncImages/advanced-aftertrain-strawberrylime-300x300.png',
            'sncImages/advanced-aftertrain-alt-1.png',
        ],
        flavour: 'Strawberry and Lime',
        size: '2Kg',
    },
    {
        id: 4,
        name: 'AFTER TRAIN ADVANCED',
        price: 39.99,
        images: [
            'sncImages/AFTER-TRAIN-ADVANCED-300x300.png',
            'sncImages/aftertrain-advanced-alt-1.png',
        ],
        flavour: 'Blue Candy Flavour',
        size: '2Kg',
    },
    {
        id: 5,
        name: 'AFTER TRAIN ADVANCED',
        price: 39.99,
        images: [
            'sncImages/orange-mango-advanced-aftertrain-for-web-300x300.png',
            'sncImages/orange-mango-advanced-alt-1.png',
        ],
        flavour: 'Orange Mango Flavour',
        size: '2Kg',
    },
    {
        id: 6,
        name: 'AFTER TRAIN',
        price: 24.99,
        images: [
            'sncImages/1After_Train_Fruit_Punch-1-300x300.png',
            'sncImages/1After_Train_Fruit_Punch-alt.png',
        ],
        flavour: 'Fruit Punch',
        size: '908g',
    },
    {
        id: 7,
        name: 'AFTER TRAIN',
        price: 24.99,
        images: [
            'sncImages/2After_Train_Raspberry-1-300x300.png',
            'sncImages/2After_Train_Raspberry-alt.png',
        ],
        flavour: 'Raspberry',
        size: '908g',
    },
    {
        id: 8,
        name: 'AFTER TRAIN',
        price: 24.99,
        images: [
            'sncImages/apple-aftertrain-300x300.png',
            'sncImages/apple-aftertrain-alt.png',
        ],
        flavour: 'Apple',
        size: '908g',
    },
    {
        id: 9,
        name: 'AFTER TRAIN',
        price: 24.99,
        images: [
            'sncImages/3After_Train_Orange-1-300x300.png',
            'sncImages/3After_Train_Orange-alt.png',
        ],
        flavour: 'Orange',
        size: '908g',
    },
];

export function CarouselCard() {
    // const slides = ProteinProducts.map((image) => (
    //     <Carousel.Slide key={image}>
    //         <Image src={image} height={220} />
    //     </Carousel.Slide>
    // ));

    return (
        <div>
            <div className="card-container">
                {ProteinProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-gray-200/30 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-4 text-white"
                    >
                        <Card radius="md" withBorder padding="xl">
                            <Card.Section>
                                <Carousel
                                    withIndicators
                                    loop
                                    classNames={{
                                        root: classes.carousel,
                                        controls: classes.carouselControls,
                                        indicator: classes.carouselIndicator,
                                    }}
                                >
                                    {product.images.map((img, index) => (
                                        <Carousel.Slide key={index}>
                                            <Image src={`/${img}`} height={220} alt={product.name} />
                                        </Carousel.Slide>
                                    ))}
                                </Carousel>
                            </Card.Section>
                            <Group justify="space-between" mt="lg">
                                <Text fw={500} fz="lg">
                                    {product.name}
                                </Text>
                            </Group>

                            <Text fz="sm" c="dimmed" mt="sm">
                                £{product.size}
                            </Text>

                            <Group justify="space-between" mt="md">
                                <div>
                                    <Text fz="xl" span fw={500}>
                                        £{product.price.toFixed(2)}
                                    </Text>
                                </div>
                            </Group>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
