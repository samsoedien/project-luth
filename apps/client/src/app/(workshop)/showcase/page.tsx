import { getServerAuthSession } from '~/server/auth'

export default async function ShowcasePage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Showcase Content</div>
}