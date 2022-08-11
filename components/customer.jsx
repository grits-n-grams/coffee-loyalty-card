export default function Customer(props) {
  return (
    <>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.email}</p>
      <p>{props.balance}</p>
    </>
  )
}
