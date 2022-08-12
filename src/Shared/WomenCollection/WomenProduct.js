import React from 'react';
import '../../pages/Product/ProductDetail.css'
import { BsFillHeartFill } from "react-icons/bs";

const WomenProduct = ({product}) => {
    const { name, img, price } = product
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
                            <div class=" flex "><span class=""><BsFillHeartFill style={{color:'#F74E42'}}/></span></div>
                        </div>
                    </div>
                    <div class="box-down">
                        <div class="h-bg">
                            <div class="h-bg-inner"></div>
                        </div>
                        <a class="cart" href="#">
                            <span class="price">${price}</span>
                            <span class="add-to-cart">
                                <span class="txt">Add in cart</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default WomenProduct;