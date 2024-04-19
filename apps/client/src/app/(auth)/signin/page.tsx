// import { auth } from '~/auth'

import SigninFeature from '~/features/auth/signin'

export default async function SigninPage() {
  // const session = await getServerAuthSession()
  // if (!session?.user) return null

  return <SigninFeature />
}
