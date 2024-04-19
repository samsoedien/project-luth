import { auth } from '~/auth'

export default async function SecurityPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Security Content</div>
}
