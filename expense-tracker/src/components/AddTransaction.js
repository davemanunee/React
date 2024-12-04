import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);
    
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100),
        text: text,
        amount: +amount
      }

      addTransaction(newTransaction)

      //console.log('submitted')
      setText('')
      setAmount('')
      
    }


  return (
    <div>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
