import useSWR from "swr"
import CustomerCard from "../../components/customerCard"
export default function customerSearch() {

  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('/api/getAll', fetcher, {
    refreshInterval: 1000,
  })
  return <>
  
  <h1 className="text-3xl text-center mb-8 mt-6">Customer search</h1>
  <div className="container mx-auto">
          {data &&
            data.map(({ id, firstName, lastName, email, balance, loyalty }) => (
              <CustomerCard
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                email={email}
                balance={balance}
                loyalty={loyalty}
              />
            ))}
        </div>
  </>
}
