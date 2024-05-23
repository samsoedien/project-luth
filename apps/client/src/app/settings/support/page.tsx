import { auth } from '~/auth'

export default async function SupportPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Support Content</div>
}
