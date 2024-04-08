import { getServerAuthSession } from '~/server/auth'

export default async function ConsultationsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Consultations Content</div>
}
