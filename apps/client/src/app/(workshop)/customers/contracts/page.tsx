import { getServerAuthSession } from '~/server/auth'

export default async function ContractsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Contracts Content</div>
}
