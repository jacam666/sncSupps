
import { Carousel } from '@mantine/carousel';
import { Card, Group, Image, Text } from '@mantine/core';
import classes from './CarouselCard.module.css';


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
