import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const EmployeeContext = React.createContext()

    /*
        Establishes what data can be used.
    */
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }
    
    /*
        Returns a context provider which has the
        'employees' state, the `addEmployee` function, 
        and the `getEmployee` function as keys. This 
        allows any child element to access them.
    */
    return (
        <EmployeeContext.Provider value={{
            employees, addEmployee, getEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

