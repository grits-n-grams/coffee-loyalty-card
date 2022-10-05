import CustomerForm from '../components/form'
export default function NewCustomer() {
  return <div className='container mx-auto'>
  <h1 className='text-3xl text-center mb-8 mt-6'>Add Customer</h1>
  <div className='text-center'>
    <CustomerForm />
  </div>
  </div>
}
