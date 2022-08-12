import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';

const Products = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
          {
              products.map(product => <ProductDetail product={product} key={product._id}></ProductDetail>)
          }
     </div>

    );
};

export default Products;


