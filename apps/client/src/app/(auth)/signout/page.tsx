import { Button } from '@project-luth/core'
import { signOut } from '~/auth'

export default function SignOutPage() {
  return (
    <div className="flex flex-col items-center">
      <h5 className="mb-2">Are you sure you want to sign out?</h5>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  )
}
