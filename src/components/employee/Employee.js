import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">Employee: {employee.name}</h3>
        <address className="employee__location">Location: {location.name}</address>
    </section>
)