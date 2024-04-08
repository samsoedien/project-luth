import { getServerAuthSession } from '~/server/auth'

export default async function JobsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Jobs Content</div>
}
