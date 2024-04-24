import { auth } from '~/auth'
import UploadForm from './upload-form'
import { api } from '~/trpc/server'

export default async function AccountPage() {
  const session = await auth()
  if (!session?.user) return null
  const profile = await api.user.getProfile.query()

  return <UploadForm profile={profile} />
}
