import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Transaction(props) {
  const [amount, setAmount] = useState(null)
  const [loyalty, setLoyalty] = useState(null)

  const resetInputs = () => {
    setTimeout(() => {
      setAmount(0)
      setLoyalty(0)
    }, 1000)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const body = { amount }
      await fetch('api/createTransaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(body),
      })
      setLoyalty(loyalty + 1)
      toast.success('Transaction Successful')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form action="submit" onSubmit={submitHandler}>
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value)
          }}
          placeholder="amount"
        />
        <button onClick={resetInputs}>Confirm</button>
        <Toaster />
      </form>
    </>
  )
}
