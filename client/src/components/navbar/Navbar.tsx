import {
    Search,
    ShoppingCart
} from "lucide-react"
import { Link } from "react-router-dom"
import { ThemeToggle } from "../ThemeToggle"
import { useState } from "react";

const Navbar = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <nav className="fixed z-[60] w-full bg-pink-600 p-4 md:px-20 h-[70px] max-h-[70px] flex items-center justify-between text-muted dark:text-primary">

            {isLoading &&
                <>
                    {/* LEFT */}
                    <Link
                        to='/'
                        className="text-2xl md:text-3xl font-semibold font-serif italic">
                        Home Food
                    </Link>

                    {/* RIGHT */}
                    <section className="flex items-center gap-4">
                        <h2 className="hidden md:block font-semibold">
                            Fix Wongsapat
                        </h2>
                        <ThemeToggle />
                        <Search
                            size={20}
                            className="hidden md:block"
                        />


                        {/* CART */}
                        <Link
                            to='/payment/1'
                            className=" relative">
                            <ShoppingCart
                                className="cursor-pointer"
                            />
                            <span className="absolute bg-muted text-primary text-sm w-[20px] h-[20px] flex items-center justify-center rounded-full top-[-10px] right-[-12px] md:right-[-18px]">
                                1
                            </span>
                        </Link>
                    </section>
                </>
            }

            {!isLoading && 
            <>
                        {/* LEFT */}
                        <Link
                to='/'
                className="text-2xl md:text-3xl font-semibold font-serif italic">
                Home Food
            </Link>

            {/* RIGHT */}
            <section className="flex items-center gap-4">
                <h2 className="hidden md:block font-semibold">
                    Fix Wongsapat
                </h2>
                <ThemeToggle />
                <Search
                    size={20}
                    className="hidden md:block"
                />


                {/* CART */}
                <Link
                    to='/payment/1'
                    className=" relative">
                    <ShoppingCart
                        className="cursor-pointer"
                    />
                    <span className="absolute bg-muted text-primary text-sm w-[20px] h-[20px] flex items-center justify-center rounded-full top-[-10px] right-[-12px] md:right-[-18px]">
                        1
                    </span>
                </Link>
            </section>
            </>
            }
        </nav>
    )
}

export default Navbar