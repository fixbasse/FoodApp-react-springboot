import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Home } from "lucide-react"


const AddressCard = () => {
    return (
        <Card className="w-full bg-primary-foreground border-0">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Home size={18} />
                    <CardTitle>Home</CardTitle>
                </div>
            </CardHeader>

            <CardContent>
                <p className="text-muted-foreground text-end">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit provident rem omnis fuga minus non, reprehenderit
                </p>
            </CardContent>

            <CardFooter className="flex justify-between">
                <Button
                    variant='secondary'
                    className="w-full">
                    Select
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AddressCard