import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = (props) => {
    return (
        <>

            <LocationProvider>
                 {/* Render the location list when http://localhost:3000/ */}
                     <Route exact path="/">
                         <LocationList />
                     </Route>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}

            // <AnimalProvider>
            //     {/* Render the animal list when http://localhost:3000/animals */}
            //     <Route path="/animals">
            //         <AnimalList />
            //     </Route>
            // </AnimalProvider>