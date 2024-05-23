import { auth } from '~/auth'

export default async function AdvancedPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Advanced Content</div>
}
