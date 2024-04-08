import { getServerAuthSession } from '~/server/auth'

export default async function MailsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Mails Content</div>
}
