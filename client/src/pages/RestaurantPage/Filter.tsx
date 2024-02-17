import { foodData } from '@/components/carousels/HomeCarousel'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from 'react'
import { dataFromDb } from '@/data/DataTest'
import { Skeleton } from "@/components/ui/skeleton"

const FormSchema = z.object({
    type: z.string()
})

//*  
const Filter = () => {
    const [showFilter, setShowFilter] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    //* FILTERED FUNCTION 
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        setIsLoading(true)

        try {
            const filteredItem = dataFromDb.filter((item) => (
                item.label === data.type
            ));

            //* Turn Obj To Array 
            const itemFilter = [...filteredItem];

            setShowFilter(itemFilter);
            console.log(showFilter);

            setIsLoading(false);
        } catch (error) {
            console.log(error);

        }
    };

    return (
        <div className='md:px-20 grid md:grid-cols-10 gap-8'>

            {/* LEFT */}
            <div className='md:col-span-2 hidden md:block'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="text-xl md:text-2xl">
                                        Category
                                    </FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            {/* CONTENT */}
                                            {foodData.map((item) => (
                                                <FormItem
                                                    key={item.label}
                                                    className="flex items-center space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <RadioGroupItem
                                                            value={item.label}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            ))}

                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>

            {/* RIGHT */}
            <div className='md:col-span-8 grid gap-4 md:gap-8 px-4 pb-4 md:p-0'>
                {/* IF NO CATEGORY IS SELECT && SHOW EVERY FOOD */}
                {showFilter.length === 0 && dataFromDb.map((item) => (
                    <div
                        key={item.id}
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
                                <h2 className='text-xl md:text-2xl'>
                                    {item.label}
                                </h2>
                                <span className='text-3xl sm:text-4xl md:text-5xl'>
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

                {/* IF CATEGORY IS SELECT && SHOW SELECTED ONE */}
                {showFilter.length > 0 && showFilter.map((item) => (
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
                                <h2 className='text-xl md:text-2xl'>
                                    {item.label}
                                </h2>
                                <span className='text-3xl sm:text-4xl md:text-5xl'>
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