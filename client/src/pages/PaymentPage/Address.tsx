import AddAddress from "./AddAddress"
import AddressCard from "./AddressCard"


const Address = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <AddressCard />
                <AddressCard />
                <AddressCard />
            </div>

            <AddAddress />
        </div>
    )
}

export default Address