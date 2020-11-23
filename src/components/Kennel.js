import React from "react"
import "./Kennel.css"
import { Animal } from "./animal/Animal.js"
import "./animal/Animal.css"
import { Location } from "./location/Location.js"
import "./location/Location.css"
import { Customer } from "./customer/Customer.js"
import "./customer/Customer.css"
import { Employee } from "./employee/Employee.js"
import "./employee/Employee.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>Electric Avenue</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />    
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
    </>
)