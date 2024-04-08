import { getServerAuthSession } from '~/server/auth'

export default async function NotificationsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Aotifications Content</div>
}
