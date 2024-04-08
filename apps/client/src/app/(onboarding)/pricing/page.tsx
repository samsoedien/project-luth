import { getServerAuthSession } from '~/server/auth'

export default async function PricingPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Pricing Content</div>
}
