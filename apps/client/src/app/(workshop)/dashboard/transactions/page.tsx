import { getServerAuthSession } from '~/server/auth'

export default async function TransactionsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Transactions Content</div>
}
