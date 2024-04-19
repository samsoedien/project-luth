import { auth } from '~/auth'

export default async function GeneralPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>General Content</div>
}
