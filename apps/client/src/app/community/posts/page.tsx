import { CreatePost } from '~/components/create-post'
import { auth } from '~/auth'

import { api } from '~/trpc/server'

export default async function PostsPage() {
  const session = await auth()
  if (!session?.user) return null

  return <CrudShowcase />
}
async function CrudShowcase() {
  const session = await auth()
  if (!session?.user) return null

  const latestPost = await api.post.getLatest.query()

  return (
    <div className="mx-auto w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  )
}
