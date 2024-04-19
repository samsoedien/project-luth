import { auth } from '~/auth'

export default async function MailsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Mails Content</div>
}
