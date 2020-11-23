import React, { useState } from 'react'


export const AnimalContext = React.createContext()

export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(response => response.json())
            .then(setAnimals)

    }

    return (
        <AnimalContext.Provider value={{
            animals, getAnimals
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}