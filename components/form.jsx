import { useState } from 'react'

export default function CustomerForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const resetInputs = () => {
    setTimeout(() => {
      setFirstName('')
      setLastName('')
      setEmail('')
    }, 2000)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const body = { firstName, lastName, email }
      await fetch('api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form action="submit" onSubmit={submitHandler}>
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

        <button onClick={resetInputs}>Add Customer</button>
      </form>
    </>
  )
}
