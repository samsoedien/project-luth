import { getServerAuthSession } from '~/server/auth'

export default async function DeliveryPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>DeliveryPage Content</div>
}
