import { foodData } from '@/components/carousels/HomeCarousel'
import { MinusCircle, PlusCircle } from 'lucide-react'
import PaymentDetail from './PaymentDetail'

const PaymentCart = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='col-span-8 grid gap-4 md:gap-8'>
                {foodData.map((item) => (
                    <section
                        key={item.label}
                        className='flex gap-4 justify-between items-center'
                    >
                        <div className='flex max-[375px]:gap-2 gap-4'>
                            <img
                                src={item.img}
                                alt="/"
                                className='h-[60px] max-[375px]:w-[150px] max-[768px]:w-[200px] md:min-w-[100px] md:w-[100px] rounded-md object-cover'
                            />

                            {/* TEXT */}
                            <article className='flex justify-between'>
                                <div className='flex flex-col justify-between'>
                                    <h2 className='md:text-xl'>
                                        {item.label}
                                    </h2>

                                    {/* COUNT */}
                                    <div className='flex items-center gap-8'>
                                        <MinusCircle size={18} />
                                        <span>1</span>
                                        <PlusCircle size={18} />
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* PRICE */}
                        <span className='text-pink-500'>
                            $30
                        </span>
                    </section>
                ))}
            </div>


            <PaymentDetail />
        </div>
    )
}

export default PaymentCart