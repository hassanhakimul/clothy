import React from 'react';
import { BsFillTelephoneOutboundFill, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const UpHeader = () => {
    return (
        <div className=' lg:flex justify-around  items-center hidden lg:mt-0 lg:col-span-5  ' >
            <div className='flex justify-around items-center'>
                <BsFillTelephoneOutboundFill className='mr-3 text-xl text-accent mb-2' /><span className='text-accent'>+ 088-458799</span>
            </div>
            <div className='flex justify-between items-center ml-96 '>
                <BsTwitter className='mr-4 text-cyan-400 ' />
                <BsInstagram className='mr-4 text-red-400'  />
                <FaFacebookF className='mr-4 text-blue-400' />
            </div>
            <hr />
        </div>
    );
};

export default UpHeader;