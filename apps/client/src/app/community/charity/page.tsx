import { auth } from '~/auth'

export default async function CharityPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Charity Content</div>
}
