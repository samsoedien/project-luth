import { getServerAuthSession } from '~/server/auth'

export default async function CommunityPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Community Content</div>
}
