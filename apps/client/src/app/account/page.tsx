import { auth } from '~/auth'
import UploadForm from './upload-form'
import { api } from '~/trpc/server'

import { Resend } from 'resend'

export default async function AccountPage() {
  const session = await auth()
  if (!session?.user) return null
  const profile = await api.user.getProfile.query()

  const sendMail = async () => {
    console.log('sending email')
    const resend = new Resend(process.env.AUTH_RESEND_KEY)

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@samsoedien.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    })
  }

  return <UploadForm image={profile?.image} sendMail={sendMail} />
}
