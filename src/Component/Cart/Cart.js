import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart =props.cart;
    console.log('ki hobe',cart);
    
    const img = cart.reduce((total, employ) => employ.img, '')
    const total = cart.reduce((year, employ) => employ.salary, '')
    
    const name = cart.reduce((total, employ) => employ.name, '')
    const address = cart.reduce((total, employ) => employ.address.city, '')
    const address1 = cart.reduce((total, employ) => employ.address.street, '')
    
    return (
        <div className="cart-style card">
            
            <img src={img} alt=""/>
            <div className="card-body">
            
            <h1 className="card-style">{total}</h1>
            <h5 className="card-style name">{name}</h5>
            <p className="card-style">{address}</p>
            <p className="card-style">{address1}</p>
            <h1>{cart.length}</h1>
            </div>
           
        
            
            
        </div>
    );
};

export default Cart;