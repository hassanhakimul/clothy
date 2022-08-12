import React from 'react';
import './Divider.css'
const Divider = () => {
    return (

        <div class=" flex flex-col justify-center items-center mt-16">
           
                <hr className='hr w-72' />
            
            <div className='my-2'>
                <h3 style={{ color: '#979797' }} className='text-center mt-1 text-xl'>Clothy Collection</h3>
                <h1 style={{ color: '#333333' }} className='text-center text-3xl mt-1'>Featured Products</h1>
                <p style={{ color: '#77778D' }}  className='text-center text-base mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit !</p>
            </div>
        </div>
    );
};

export default Divider;