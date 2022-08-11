import { useState } from 'react'

export default function CustomerForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [balance, setbalance] = useState(0)
  return (
    <>
      <form action="submit">
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          placeholder="Last Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Email"
        />

        <button>Add Customer</button>
      </form>
    </>
  )
}
