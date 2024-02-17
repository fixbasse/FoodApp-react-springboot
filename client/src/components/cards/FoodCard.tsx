import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"


export const cardData = [
    {
        label: 'Burger With Something',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus debitis enim quam ab, necessitatibus labore saepe, consequatur unde, quasi eligendi maxime vel laboriosam facilis perferendis in harum assumenda at!',
    },
];

export function FoodCard() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Card className="w-full bg-primary-foreground border-0 rounded-xl cursor-pointer hover:scale-90 duration-300">
            <Link
                to='/restaurant/1'
            >
                {isLoading && (
                    <>
                        <CardHeader className="p-0">
                            <Skeleton className="h-[212px]" />
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="w-full">
                            {cardData.map((item) => (
                                <div
                                    key={item.label}
                                    className="w-full flex flex-col gap-2"
                                >
                                    <Skeleton className="flex justify-between w-full items-center">
                                        <h2 className="h-[24px]" />
                                        <h2 className="h-[20px]" />
                                    </Skeleton>

                                    {/* DES */}
                                    <Skeleton className="text-muted-foreground text-sm h-[41px]" />
                                </div>
                            ))}
                        </CardFooter></>
                )}

                {!isLoading &&
                    <>
                        <CardHeader className="p-0">
                            <img
                                src="https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="/"
                                className="rounded-t-md"
                            />
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="w-full">
                            {cardData.map((item) => (
                                <div
                                    key={item.label}
                                    className="w-full"
                                >
                                    <div className="flex justify-between w-full items-center">
                                        <h2>{item.label}</h2>
                                        <Heart
                                            size={20}
                                            className="cursor-pointer"
                                        />
                                    </div>

                                    {/* DES */}
                                    <span className="text-muted-foreground text-sm">
                                        {item.desc.length > 40
                                            ? item.desc.substring(0, 80) + "..."
                                            : item.desc
                                        }
                                    </span>
                                </div>
                            ))}
                        </CardFooter>
                    </>
                }
            </Link>
        </Card >
    )
}
