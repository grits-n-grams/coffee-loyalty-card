export default function CustomerCard(props) {
  const surname = props.lastName.toUpperCase()
  const name = props.firstName.toUpperCase()
  return(
    <section className="flex flex-row">
      <div className="flex flex-col my-4">
        <div className="basis-1">
          <h1 className="text-xl">Name: {surname}, {name}</h1>
        </div>
        <div className="basis-3 flex flex-col">
          <p>Email: {props.email}</p>
          <p>Balance: {props.balance}</p>
        </div>
      </div>
    </section>
  )
}