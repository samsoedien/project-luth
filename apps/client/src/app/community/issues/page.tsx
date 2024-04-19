import { auth } from '~/auth'

export default async function IssuesPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Issues Content</div>
}
