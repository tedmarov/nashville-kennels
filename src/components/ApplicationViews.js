import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"

export const ApplicationViews = (props) => {
    return (
        <>

            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/">
                            <LocationList />
                        </Route>
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />

                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />

                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetail {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />

                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />

                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                    </LocationProvider>
                </AnimalProvider>
            </EmployeeProvider >
        </>
    )
}


            // <AnimalProvider>
            //     {/* Render the animal list when http://localhost:3000/animals */}
            //     <Route path="/animals">
            //         <AnimalList />
            //     </Route>
            // </AnimalProvider>