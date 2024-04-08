import { getServerAuthSession } from '~/server/auth'

export default async function CustomersPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Customers Content</div>
}
