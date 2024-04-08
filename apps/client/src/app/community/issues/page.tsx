import { getServerAuthSession } from '~/server/auth'

export default async function IssuesPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Issues Content</div>
}
