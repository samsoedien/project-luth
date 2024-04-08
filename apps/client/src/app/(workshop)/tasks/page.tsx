import { getServerAuthSession } from '~/server/auth'

export default async function TasksPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Tasks Content</div>
}
