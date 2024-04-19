import { auth } from '~/auth'

export default async function PricingPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Pricing Content</div>
}
