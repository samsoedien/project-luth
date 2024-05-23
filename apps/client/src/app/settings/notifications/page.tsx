import { auth } from '~/auth'

export default async function NotificationsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Aotifications Content</div>
}
