export default function Customer(props) {
  return (
    <tbody>
      <tr>
        <th>| {props.id}</th>
        <th>| {props.firstName}</th>
        <th>| {props.lastName}</th>
        <th>| {props.email}</th>
        <th>| {props.balance}</th>
        <th>| {props.loyalty}</th>
      </tr>
    </tbody>
  )
}
