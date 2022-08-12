import React from 'react';
import './ProductDetail.css'
const ProductDetail = ({ product }) => {
    const { name, img, price } = product
    const handleAddToCart=()=>{
        console.log('clicked')
    }
    return (
        <div class="container page-wrapper ">
            <div class="page-inner">
                <div class="row">
                    <div class="el-wrapper">
                        <div class="box-up">
                            <img class="img" src={img} alt="" />
                            <div class="img-info">
                                <div class="info-inner">
                                    <span class="p-name">{name}</span>
                                    <span class="p-company">Yeezy</span>
                                </div>
                                <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                            </div>
                        </div>
                        <div class="box-down">
                            <div class="h-bg">
                                <div class="h-bg-inner"></div>
                            </div>
                            <a class="cart" href="#">
                                <span class="price">${price}</span>
                                <span class="add-to-cart">
                                    <span class="txt" onClick={handleAddToCart}>Add in cart</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;