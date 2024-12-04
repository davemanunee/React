import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Balance = () => {

  const { transactions } = useContext(GlobalContext);

   const amount = transactions.map(transaction => transaction.amount);
   const totalBefore = amount.reduce((acc, item) => (acc += item),0)
   const total = totalBefore.toFixed(2)

  


  return (
    <>
        <h4>
            This is your current amount
        </h4>
        <h1>
            ${total}
        </h1>
    </>
  )
}
