import React, { useEffect, useState } from 'react';
import WomenProduct from './WomenProduct';
import './Clipath.css'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const WomenCollection = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='women'>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16'>
                {
                    products.map(product => <WomenProduct product={product} key={product._id}></WomenProduct>)
                }
            </div>
            <div onClick={()=>navigate("/eid")} className='btn clip w-20 h-20 bg-primary rounded-full text-center justify-center items-center flex flex-col text-white'>
               <button  >Explore more</button> <BsArrowRight className='w-12'/>
            </div>
        </div>
    );
};

export default WomenCollection;