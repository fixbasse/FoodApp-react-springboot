import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const foodData = [
    {
        label: 'Burger',
        img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        label: 'Sandwich',
        img: 'https://images.pexels.com/photos/5292918/pexels-photo-5292918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        label: 'Fried Rice',
        img: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        label: 'Cake',
        img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        label: 'Chicken',
        img: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        label: 'Sea Food',
        img: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        label: 'Burger',
        img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        label: 'Burger',
        img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        label: 'Burger',
        img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
]

export function FoodCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-[14rem] sm:max-w-xs md:max-w-7xl"
        >
            <CarouselContent>
                {foodData.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/3 lg:basis-1/6 flex flex-col items-center">
                        <div>
                            <Card className="rounded-full">
                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full rounded-full"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <span className="">
                            {item.label}
                        </span>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
