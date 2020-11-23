import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const CustomerContext = React.createContext()

    /*
        Establishes what data can be used.
    */
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }
    
    /*
        Returns a context provider which has the
        'customers' state, the `addCustomer` function, 
        and the `getCustomer` function as keys. This 
        allows any child element to access them.
    */
    return (
        <CustomerContext.Provider value={{
            customers, addCustomer, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}

