import { auth } from '~/auth'

export default async function ContractsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Contracts Content</div>
}
