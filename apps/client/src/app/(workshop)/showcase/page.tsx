import { auth } from '~/auth'

export default async function ShowcasePage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Showcase Content</div>
}
