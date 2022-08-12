import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import red from '../../images/red.png'
const Banner = () => {
    return (
        
    <section class=" dark:bg-gray-900"  >
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Cloths are the Sprite for Fashion </h1>
            <p class="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Fashion is a form of self-expression and outonomy at a perticlar period.Let's get your on fashion today</p>
            <Link to='/login' class="btns inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex" style={{ backgroundImage: `url(${red})`,backgroundRepeat:'no-repeat' }} >
        <img class="mask  mask-circle" src="https://media.istockphoto.com/photos/just-picked-up-a-few-things-online-picture-id1333958998?k=20&m=1333958998&s=612x612&w=0&h=o4KFYWUWRTaJIXFBIQgZLgbv_STr6JxCWGD75f9k7Qk=" />
           
        </div>                
    </div>
</section>
    );
};

export default Banner;

