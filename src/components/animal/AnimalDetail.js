import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetail = (props) => {
    const { animals, releaseAnimal, getAnimalById } = useContext(AnimalContext)

    // useState is a React hook or a function that takes one argument and returns an array
    const [animal, setAnimal] = useState({ location: {}, customer: {} })
    // const [test, setTest] = useState("It's almost the holidays")

    useEffect(() => {
        // console.log("empty state of animal", animal)
        const animalId = parseInt(props.match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    // debugger

    return (
        <>
            {/* {console.log(animal)} */}
            <section className="animal">
                <h3 className="animal__name">{animal.name}</h3>
                <div className="animal__breed">{animal.breed}</div>
                <div className="animal__location">Location: {animal.location.name}</div>
                <div className="animal__owner">Customer: {animal.customer.name}</div>
                <button onClick={() => {
                    props.history.push(`/animals/edit/${animal.id}`)
                }}>Edit</button>
                <button className="btn--release"
                    onClick={() => {
                        releaseAnimal(animal.id)
                            .then(() => {
                                props.history.push("/animals")
                            })
                    }}>Release Animal</button>
            </section>
        </>
    )
}