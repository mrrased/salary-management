import React, { useState } from 'react';
import './Employ.css';
import fakeData from '../../fakeData';
import Company from '../Company/Company';
import Cart from '../Cart/Cart';
import View from '../View/View';

const Employ = () => {
const employ20 = fakeData.slice(0, 20);
const [employ, setEmploy] = useState(employ20);
const [cart, setCart] = useState([]);

const handleAddEmploy = (Company) =>{
    //console.log('employ added', Company);
    const newCart = [...cart, Company];
    setCart(newCart);
}

    return (
        <div className="Employee-container">
            
            <div className="employee-List">
            <h3>{employ.length}</h3>
            
            {
                employ.map(employ => <Company 
                    handleAddEmploy = {handleAddEmploy}
                    Company={employ}
                    ></Company>)
            }
        
            </div>
            <div className="employee-view">
                <Cart  cart={cart}></Cart>
                
            </div>

        </div>
    );
};

export default Employ;