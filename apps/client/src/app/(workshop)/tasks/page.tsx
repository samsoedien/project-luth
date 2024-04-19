import { auth } from '~/auth'

export default async function TasksPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Tasks Content</div>
}
