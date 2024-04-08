import { getServerAuthSession } from '~/server/auth'

export default async function CheckoutPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>CheckoutPage Content</div>
}
