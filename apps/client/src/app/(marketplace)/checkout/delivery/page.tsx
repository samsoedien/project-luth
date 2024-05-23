import { auth } from '~/auth'

export default async function DeliveryPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>DeliveryPage Content</div>
}
