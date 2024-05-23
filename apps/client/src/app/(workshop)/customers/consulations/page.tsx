import { auth } from '~/auth'

export default async function ConsultationsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Consultations Content</div>
}
