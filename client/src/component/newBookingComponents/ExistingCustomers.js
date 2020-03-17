import React from 'react';
import '../../App.css';


const ExistingCustomers = (props) => {
    const options = props.customers.map(customer => {
        return (
            <option
            value={customer.id}
            key={customer.id}>
                {customer.firstName} {" "}
                {customer.lastName}
            </option>
        )
    })

    function handleCustomer(e) {
        props.handleSelectedCustomer(e.target.value)
    }

    return (
        <div className="existing-customers">
            <select defaultValue="" onChange={handleCustomer}>
                <option disabled value="">Select Customer name:</option>
                {options}
            </select>
        </div>
    )
}

export default ExistingCustomers;


