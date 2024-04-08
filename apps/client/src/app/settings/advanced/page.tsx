import { getServerAuthSession } from '~/server/auth'

export default async function AdvancedPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Advanced Content</div>
}
