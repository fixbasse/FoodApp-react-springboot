

const PaymentDetail = () => {
    return (
        <div className="bg-primary-foreground p-4 rounded-md">
            <h2 className="text-xl">
                Bill Details
            </h2>

            <section className="pt-2 text-muted-foreground flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3>Item Total</h3>
                    <span>$30</span>
                </div>
                <div className="flex items-center justify-between">
                    <h3>Delivery Fee</h3>
                    <span>$1</span>
                </div>
                <div className="flex items-center justify-between">
                    <h3>Platform Fee</h3>
                    <span>$2</span>
                </div>
                <div className="flex items-center justify-between">
                    <h3>Restaurant Charge</h3>
                    <span>$1</span>
                </div>
            </section>
        </div>
    )
}

export default PaymentDetail