import { auth } from '~/auth'

export default async function TransactionsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Transactions Content</div>
}
