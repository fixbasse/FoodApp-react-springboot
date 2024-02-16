import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Heart } from "lucide-react"

export function FoodCard() {
    return (
        <Card className="w-full rounded-md cursor-pointer hover:scale-90 duration-300">
            <CardHeader className="p-0">
                <img
                    src="https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="/"
                    className="rounded-t-md"
                />
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter className="flex flex-col">
                <div className="flex justify-between w-full items-center">
                    <h2>Burger with something</h2>

                    <Heart
                    size={20}
                        className="cursor-pointer"
                    />
                </div>

                {/* DES */}
                <span className="text-muted-foreground text-xs pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis tempore molestiae? Corrupti officiis enim iure
                </span>
            </CardFooter>
        </Card>
    )
}
