import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Company.css';


const Company = (props) => {
    console.log(props);
    const {name, img, salary, phone, email} = props.Company;
    return (
        <div className="company-style">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p>Salary: {salary}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <button className="button-style"
                onClick={() => props.handleAddEmploy(props.Company)}
                >
                    Add Plus <FontAwesomeIcon icon={faPlus}/></button>
            </div>
            
            
        </div>
    );
};

export default Company;