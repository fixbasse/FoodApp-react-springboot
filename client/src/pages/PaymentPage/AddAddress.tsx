import { AddressModal } from "@/components/modals/AddressModal"
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { MapPin } from "lucide-react"


const AddAddress = () => {
    return (
        <Card className="w-[240px] border-0 shadow-none">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <CardTitle className="text-xl">
                        Add New Address
                    </CardTitle>
                </div>
            </CardHeader>

            <CardFooter className="flex justify-between">
                <AddressModal />
            </CardFooter>
        </Card>
    )
}

export default AddAddress