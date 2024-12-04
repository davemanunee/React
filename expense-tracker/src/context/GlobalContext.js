import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer"

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactionData') || '[]') 
}

//Global Context

export const GlobalContext = createContext(initialState);

//Adding Provider to the project

export const GlobalProvider = ({ children }) => {
     const [state, dispatch] = useReducer(AppReducer, initialState)


     useEffect(() => {
        localStorage.setItem('transactionData', 
            JSON.stringify(state.transactions))
     }, [state.transactions])

     function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
     }

     function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
     }


     return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
     )

}
