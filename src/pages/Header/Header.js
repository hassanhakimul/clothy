import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DiCoda } from "react-icons/di";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
const Header = () => {
    const navigate=useNavigate();
    return (
        <div class="navbar   border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 mt-6">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/men' class=" py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Men</Link>
                            </li>
                        <li tabindex="0">
                            <Link to='/women' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary	 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Women</Link>

                        </li>
                        <li>
                            <Link to='/accessories' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary	 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Accessories</Link>
                        </li>
                        <li>
                            <Link to='/eid' data-tip="Special" class="tooltip tooltip-open tooltip-right block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary	 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Summer</Link>
                        </li>
                        <li>
                            <Link to='/sale' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sale</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/' class="flex items-center">
                    <span className='mr-3 h-6 sm:h-9'><DiCoda className='text-accent' /></span>
                    <span class="self-center text-3xl  font-semibold whitespace-nowrap dark:text-white">Clothy.</span>
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to='/men' class="block py-2 pr-4 pl-3 text-white rounded text-primary	lg:bg-transparent lg:text-primary lg:p-0 dark:text-white" aria-current="page">Men</Link>
                    </li>
                    <li tabindex="0">
                        <Link to='/women' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Women</Link>

                    </li>
                    <li>
                        <Link to='/accessories' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Accessories</Link>
                    </li>
                    <li>
                        <Link to='/eid'  data-tip="Special" class="tooltip tooltip-open tooltip-neutral block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"> Summer</Link>
                    </li>
                    <li>
                        <Link to='/sale' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sale</Link>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="flex items-center justify-around lg:order-2">
                    <div className='mr-5 tooltip cursor-pointer' data-tip="Search"><FiSearch /></div>
                    <div className='mr-5 tooltip cursor-pointer' data-tip="Wishlist"> <FaRegHeart /></div>
                    <div class="indicator mr-5">
                        <span class="indicator-item badge badge-primary "></span>
                        <div class="grid  place-items-center tooltip cursor-pointer" data-tip="Cart" onClick={()=>navigate('/cart')}><BsCart2 className='w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider text-white'></div>
        </div>


    );
};

export default Header;





