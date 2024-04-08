import { getServerAuthSession } from '~/server/auth'

export default async function SupportPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Support Content</div>
}
