import { auth } from '~/auth'

export default async function ArchivesPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Archives Content</div>
}
