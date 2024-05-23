import { auth } from '~/auth'

export default async function JobsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Jobs Content</div>
}
