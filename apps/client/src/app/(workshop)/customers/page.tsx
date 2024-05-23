import { auth } from '~/auth'

export default async function CustomersPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Customers Content</div>
}
