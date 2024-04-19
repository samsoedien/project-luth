import { auth } from '~/auth'

export default async function ProjectsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Projects Content</div>
}
