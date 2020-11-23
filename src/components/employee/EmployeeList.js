import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = () => {
    // This state changes when `getemployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

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
    useEffect(() => {
        console.log("employeeList: Employee state changed")
        console.log(employees)
    }, [employees])

    return (
        <div className="employees">
            {
                employees.map(cust => <Employee key={cust.id} employee={cust} />)
            }
        </div>
    )
}