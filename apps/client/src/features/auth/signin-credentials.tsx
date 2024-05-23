import { signIn } from '~/auth'

export default function SignInCredentials() {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signIn('credentials', formData, { redirectTo: '/account' })
        // await signIn('credentials', { ...formData, redirectTo: '/account' })
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  )
}
