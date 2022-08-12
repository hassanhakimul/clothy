import React from 'react';
import { RiLeafFill } from "react-icons/ri";
const Footer = () => {
  return (
    <section className='bg-base-200'>
      <footer class="footer p-10 bg-base-200 text-base-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span class="footer-title"></span>
          <div class="form-control w-80">
            <label class="label">

            </label>
            <div class="relative">
              <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
              <button class="btn  absolute top-0 right-0 rounded-l-none       bg-black px-10 py-2 text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <hr class=" my-6 lg:my-8 border-gray-300 sm:mx-auto dark:border-gray-700 " />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-base-200 text-base-content ">
       <div>
       <div >
        <a href="#"
          class="flex items-center mr-28 justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
         <RiLeafFill style={{color: '#83B541'}}/>
          Clothy
        </a>
        <span class="block text-sm text-center ml-3  text-gray-500 dark:text-gray-400 mb-6">© 2022-2023 Clothy™. All Rights Reserved.
        </span>
        </div>
       </div>
        <ul class="flex justify-center items-center mt-5 space-x-5">
          <li>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <img className='h-6 w-6' src="https://www.freepnglogos.com/uploads/facebook-logo-16.png" alt="" />
              </a>
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <img className='h-8 w-8' src="https://www.freepnglogos.com/uploads/pics-photos-instagram-logo-png-4.png" alt="" />
              </a>
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <img className='h-7 w-7' src="https://www.freepnglogos.com/uploads/telegram-logo-png-0.png" alt="" />
              </a>
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <img className='h-8 w-8' src="https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <img className='h-8 w-8' src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
            </a>
          </li>
        </ul>
      </div>


    </section>
  );
};

export default Footer;