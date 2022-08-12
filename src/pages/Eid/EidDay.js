import React from 'react';
import Product from '../../pages/Product/Products'

const EidDay = () => {
    return (

        <section class="bg-white dark:bg-gray-900  flex">
            <div class="container px-6 py-8 mx-auto flex-grow: 1" >
                <div class="lg:flex lg:-mx-2">
                    <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 ">
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</a>
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hoodies</a>
                        <a href="#" class="block font-medium text-blue-600 dark:text-blue-500 hover:underline">T-shirts & Vests</a>
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shirts</a>
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Blazers & Suits</a>
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jeans</a>
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Trousers</a>
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shorts</a>
                        <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Underwear</a>
                    </div>
                    <div className='flex-grow:3'>
                        <Product/>
                    </div>



                </div>
            </div>

        </section>
    );
};

export default EidDay;