import { getServerAuthSession } from '~/server/auth'

export default async function OnboardingPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Onboarding Content</div>
}
