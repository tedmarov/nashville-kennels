import { useContext } from "react"


export const CustomerList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        Component was "mounted" to the DOM. Needs to render blank
        HTML first, then gets th data, then re-renders.
    */
}