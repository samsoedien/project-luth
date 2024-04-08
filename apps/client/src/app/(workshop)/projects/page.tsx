import { getServerAuthSession } from '~/server/auth'

export default async function ProjectsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Projects Content</div>
}
