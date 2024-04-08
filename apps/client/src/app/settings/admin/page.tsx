import { getServerAuthSession } from '~/server/auth'

export default async function AdminPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Admin Content</div>
}
