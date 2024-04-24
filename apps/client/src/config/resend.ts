import { Resend } from 'resend'

const resend = new Resend(process.env.AUTH_RESEND_KEY)

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'info@samsoedien.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
})
