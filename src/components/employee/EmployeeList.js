import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = (props) => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees, removeEmployee } = useContext(EmployeeContext)

    /*
    Component was "mounted" to the DOM. Needs to render blank
    HTML first, then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("employeeList: Initial render before data")
        getEmployees()
    }, [])

    /*
    This is responding to the employee state changed.
    */

    return (
        <>
            <h2>Employees</h2>
            <button onClick={() => props.history.push("/employees/create")}>
                Hire Button
            </button>
            <div className="employees">
                {
                    employees.map(employee => {
                        return (<div className="employeeCard">
                            < Link key={employee.id} to={`/employees/${employee.id}`}>
                                <h3>{employee.name}</h3>
                            </Link>
                            <button className="btn--remove"
                                onClick={() => {
                                    removeEmployee(employee.id)
                                        .then(() => {
                                            props.history.push("/employees")
                                        })
                                }}>Remove Employee</button>
                        </div>
                        )
                    })}
            </div>
        </>
    )
}


// import { LocationContext } from "../location/LocationProvider"
// import { AnimalContext } from "../animal/AnimalProvider"
// import { Employee } from "./Employee"

// const { locations, getLocations } = useContext(LocationContext)
// const { animals, getAnimals } = useContext(AnimalContext)

// getLocations()
// .then(getAnimals)
//     .then(getEmployees)


// {employees.map(employee  => {
    //     const workplace = locations.find(l => l.id === employee.locationId)
    //     const care = animals.find(l => l.locationId === employee.locationId)

    //     return <Employee key={employee.id}
    //         location={workplace}
    //         employee={employee}
    //         animal={care}

    //     />
    // })}

    // useEffect(() => {
    //     console.log("employeeList: Employee state changed")
    //     console.log(employees)
    // }, [employees])