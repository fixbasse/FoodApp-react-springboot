import { ThemeToggle } from "@/components/ThemeToggle"
import { FoodCard } from "@/components/cards/FoodCard"
import { FoodCarousel } from "@/components/carousels/HomeCarousel"

const HomePage = () => {
    return (
        <>
            {/* HEADER ======> */}
            <div className='relative flex flex-col items-center justify-center h-screen banner'>

                <div className="absolute w-full h-full dark:bg-black/30 z-0 inset-0">

                </div>
                {/* TITLE */}
                <section className='flex flex-col items-center gap-2 z-50'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-muted dark:text-primary'>
                        Home Food
                    </h1>
                    <p className='md:text-xl lg:text-2xl text-center text-muted dark:text-primary'>
                        Taste the Convenience: Food, Fast and Delivered.
                    </p>
                </section>
            </div>
            {/* <========= HEADER */}

            {/* CAROUSEL */}
            <section className="w-full flex flex-col p-8">
                <h2 className="text-center md:text-left text-xl md:text-2xl font-semibold pb-8">
                    Top Meal
                </h2>

                <div className="flex justify-center">
                    <FoodCarousel />
                </div>
            </section>

            {/* CARDS */}
            <section className="p-8 flex flex-col">
                <h2 className="text-center md:text-left text-xl md:text-2xl font-semibold pb-8">
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