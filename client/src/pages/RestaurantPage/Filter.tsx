import { foodData } from '@/components/carousels/HomeCarousel'
import { CategoryFilter } from '@/components/radio-group/CategoryFilter'
import { Button } from '@/components/ui/button'

const Filter = () => {
    return (
        <div className='py-4 md:px-20 grid grid-cols-10 gap-8'>
            {/* LEFT */}
            <div className='col-span-2'>
                <CategoryFilter />
            </div>

            {/* RIGHT */}
            <div className='col-span-8 grid gap-8'>
                {foodData.map((item) => (
                    <div
                        key={item.label}
                        className='flex flex-col md:flex-row gap-4 md:items-end md:gap-24'
                    >
                        <section className='flex flex-col md:flex-row md:gap-4'>
                            <img
                                src={item.img}
                                alt="/"
                                className='h-[200px] w-full md:min-w-[300px] md:w-[300px] rounded-md object-cover'
                            />
                            {/* TEXT */}
                            <div className='flex flex-col justify-between'>
                                <h2 className='text-2xl'>
                                    {item.label}
                                </h2>
                                <span className='text-4xl md:text-5xl'>
                                    $30
                                </span>
                                <p className='text-muted-foreground'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque deserunt dolorem temporibus est sint perferendis totam quae sit quidem. Officia dolor eum itaque, libero quia perferendis recusandae nostrum mollitia.
                                </p>
                            </div>
                        </section>

                        {/* ADD TO CART */}
                        <Button>
                            Add To Cart
                        </Button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Filter