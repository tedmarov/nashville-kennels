import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, searchTerms, getAnimals } = useContext(AnimalContext)

    /*
        Since you are no longer ALWAYS going to be displaying all animals. Ch. 14
    */
    const [filteredAnimals, setFiltered] = useState([])

    /*
    What's the effect this is reponding to? Component was
    "mounted" to the DOM. React renders blank HTML first,
    then gets the data, then re-renders.
    */

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect hook function will run when the following two state changes happen:
            1. The animal state changes. First when it is created, then once you get the animals from the API
            2. When the search terms change, which happens when the user types something in the AnimalSearch component
    */
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
        </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}

// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"

// const { locations, getLocations } = useContext(LocationContext)
// const { customers, getCustomers } = useContext(CustomerContext)

//    getLocations()
//    .then(getCustomers)

/* {
    animals.map(animal => {
        const owner = customers.find(c => c.id === animal.customerId)
        const clinic = locations.find(l => l.id === animal.locationId)

        return <Animal key={animal.id}
            location={clinic}
            customer={owner}
            animal={animal} />
    })} */

// ---

// useEffect(() => {
    //     console.log("AnimalList: Animal state changed")
//     console.log(animals)
// }, [animals])