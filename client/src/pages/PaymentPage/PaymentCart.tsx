import { foodData } from '@/components/carousels/HomeCarousel'
import { Button } from '@/components/ui/button'
import { Minus, MinusCircle, Plus, PlusCircle } from 'lucide-react'
import React from 'react'

const PaymentCart = () => {
    return (
        <div>
            <div className='col-span-8 grid gap-8'>
                {foodData.map((item) => (
                    <section
                        key={item.label}
                        className='flex gap-4 justify-between items-center'
                    >
                        <div className='flex gap-4'>

                            <img
                                src={item.img}
                                alt="/"
                                className='h-[100px] w-full min-w-full md:min-w-[200px] md:w-[200px] rounded-md object-cover'
                            />

                            {/* TEXT */}
                            <article className='flex justify-between'>
                                <div className='flex flex-col justify-between'>
                                    <h2 className='text-2xl md:text-3xl'>
                                        {item.label}
                                    </h2>

                                    {/* COUNT */}
                                    <div className='flex items-center gap-8'>
                                        <MinusCircle />
                                        <span>1</span>
                                        <PlusCircle />
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* PRICE */}
                        <span className='text-xl md:text-xl text-pink-500'>
                            $30
                        </span>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default PaymentCart