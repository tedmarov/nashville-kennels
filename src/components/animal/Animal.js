import React from "react"
import "./Animal.css"

export const Animal = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <address className="animal__breed">Breed: {animal.breed}</address>
        <address className="animal__location">Location: { location.name }</address>
        <address className="animal__customer">Customer: { customer.name }</address>
    </section>
)