// import { auth } from '~/auth'

import EmailSignIn from '~/features/auth/email-signin'
import SigninFeature from '~/features/auth/signin'
import SignInCredentials from '~/features/auth/signin-credentials'

export default async function SigninPage() {
  // const session = await getServerAuthSession()
  // if (!session?.user) return null

  return (
    <>
      <div>
        <EmailSignIn />
        <SignInCredentials />
      </div>
      <SigninFeature />
    </>
  )
}
