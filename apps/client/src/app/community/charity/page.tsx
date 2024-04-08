import { getServerAuthSession } from '~/server/auth'

export default async function CharityPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Charity Content</div>
}
