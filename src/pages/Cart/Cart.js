import React, { useState } from 'react';
import './Cart.css'
const Cart = () => {

  let [num, setNum]= useState(0);
  const [subtotal,setSubtotal]=useState(0);
  let incNum =()=>{
    if(num<20)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
  let price=12;



    return (
  <div className='mb-28 mt-28'>
    <h1 className='text-4xl'>Order Summery</h1>

<div class="shopping-cart">

  <div class="column-labels">
    <label class="product-image">Image</label>
    <label class="product-details">Product</label>
    <label class="product-price">Price</label>
    <label class="product-quantity">Quantity</label>
    <label class="product-removal">Remove</label>
    <label class="product-line-price">Total</label>
  </div>

  <div class="product">
    <div class="product-image">
      <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"/>
    </div>
    <div class="product-details">
      <div class="product-title">Dingo Dog Bones</div>
      <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
    </div>
    <div class="product-price">12.99</div>
    <div class="product-quantity">
    <div className="col-xl-1">
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">25.98</div>
  </div>


  <div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">{subtotal}</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">3.60</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">90.57</div>
    </div>
  </div>

  <button class="checkout">Checkout</button>

</div>
  </div>
    );
};

export default Cart;