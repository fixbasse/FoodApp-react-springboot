import { ThemeToggle } from "@/components/ThemeToggle"
import { FoodCard } from "@/components/cards/FoodCard"
import { FoodCarousel } from "@/components/carousels/HomeCarousel"

const HomePage = () => {
    return (
        <>
            {/* HEADER ======> */}
            <div className='flex flex-col items-center justify-center h-screen banner'>
                {/* TITLE */}
                <section className='flex flex-col items-center gap-2'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold'>
                        Home Food
                    </h1>
                    <p className='md:text-xl lg:text-2xl'>
                        Taste the Convenience: Food, Fast and Delivered.
                    </p>

                    <ThemeToggle />
                </section>
            </div>
            {/* <========= HEADER */}

            {/* CAROUSEL */}
            <section className="w-full flex justify-center p-8">
                <FoodCarousel />
            </section>

            {/* CARDS */}
            <section className="p-8 flex flex-col">
                <h2 className="text-xl md:text-2xl font-semibold text-center pb-16">
                    Order From Our Handpicked Favourite
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </div>
            </section>
        </>
    )
}

export default HomePage