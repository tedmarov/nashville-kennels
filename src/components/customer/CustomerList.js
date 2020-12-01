import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        Component was "mounted" to the DOM. Needs to render blank
        HTML first, then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("CustomerList: Initial render before data")
        getCustomers()
    }, [])

    /*
        This is responding to the customer state changed.
    */
    // useEffect(() => {
    //     console.log("CustomerList: Customer state changed")
    //     console.log(customers)
    // }, [customers])

    return (
        <div className="customers">
            <h2>Customers</h2>
            {
                customers.map(cust => <Customer key={cust.id} customer={cust} />)
            }
        </div>
    )
}