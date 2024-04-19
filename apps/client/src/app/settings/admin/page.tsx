import { auth } from '~/auth'

export default async function AdminPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Admin Content</div>
}
