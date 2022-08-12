import React from 'react';
import './MsgFloat.css'
import { AiFillMessage } from "react-icons/ai";
const MsgFloat = () => {
    return (
        <div >
            <a href='#contact' class="float cursor-pointer">
                <AiFillMessage class=" my-float" />
            </a>
            <div class="label-container">
                <div class="label-text">Your opinion matter to us !</div>
                <i class="fa fa-play label-arrow"></i>
            </div>
        </div>

    );
};

export default MsgFloat;