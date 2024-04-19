import { auth } from '~/auth'

export default async function CommunityPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Community Content</div>
}
