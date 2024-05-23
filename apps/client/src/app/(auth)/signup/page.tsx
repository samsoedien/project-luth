// import { auth } from '~/auth'

import SignupFeature from '~/features/auth/signup'

export default async function SignupPage() {
  // const session = await getServerAuthSession()
  // if (!session?.user) return null

  return <SignupFeature />
}
