import { getServerAuthSession } from '~/server/auth'

export default async function ArchivesPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Archives Content</div>
}
