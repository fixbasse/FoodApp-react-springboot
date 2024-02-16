import PaymentCart from "./PaymentCart"


const PaymentPage = () => {
    return (
        <div className='p-4 pt-20 md:px-20 grid grid-cols-10 gap-8'>
            {/* LEFT */}
            <div className="col-span-4">
                <PaymentCart />
            </div>

            {/* RIGHT */}
            <div className=" col-span-6">
                Fix
            </div>
        </div>
    )
}

export default PaymentPage