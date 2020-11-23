import React from "react"
import "./Kennel.css"
// import { Animal } from "./animal/Animal.js"
import { AnimalList } from "./animal/AnimalList.js"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import "./animal/Animal.css"
// import { Location } from "./location/Location.js"
import { LocationList } from "./location/LocationList.js"
import { LocationProvider } from "./location/LocationProvider.js"
import "./location/Location.css"
import { Customer } from "./customer/Customer.js"
import { CustomerList } from "./customer/CustomerList.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import "./customer/Customer.css"
import { Employee } from "./employee/Employee.js"
import "./employee/Employee.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Visit us at these Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>


        {/* <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>Electric Avenue</div>
        </address> */}

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>


        {/* <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article> */}


        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>


        {/* <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />    
        </article> */}

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
    </>
)