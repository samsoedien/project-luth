import { getServerAuthSession } from '~/server/auth'

export default async function SecurityPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Security Content</div>
}
