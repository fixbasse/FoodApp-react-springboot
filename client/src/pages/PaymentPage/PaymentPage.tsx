import Address from "./Address"
import PaymentCart from "./PaymentCart"

const PaymentPage = () => {
    return (
        <div className='p-4 pt-[5.5rem] md:pt-[6.5rem] lg:px-20 grid md:grid-cols-10 gap-8 md:gap-20'>
            {/* LEFT */}
            <div className="md:col-span-3">
                <PaymentCart />
            </div>

            {/* RIGHT */}
            <div className="md:col-span-7">
                <Address />
            </div>
        </div>
    )
}

export default PaymentPage