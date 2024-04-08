import { getServerAuthSession } from '~/server/auth'

export default async function GeneralPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>General Content</div>
}
