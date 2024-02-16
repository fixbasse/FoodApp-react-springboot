

const Header = () => {
    return (
        <div>
            <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="/"
                className="h-[50dvh] w-full object-cover"
            />

            <section className="py-4 md:px-20">
                <h1 className="text-3xl md:text-4xl font-semibold">
                    India Fast Food
                </h1>
                <p className="text-muted-foreground mb-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio architecto voluptas animi neque. Aspernatur nisi, nesciunt at expedita atque numquam quod magnam dolorem facere tenetur, facilis autem quos cum possimus.
                </p>
                <span>
                    Open now 10.30am - 12.00pm
                </span>
            </section>
        </div>
    )
}

export default Header