import { CarouselSpacing } from '~/components/carousel/carousel'
import { getServerAuthSession } from '~/server/auth'

export default async function ProductsPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return (
    <div>
      Products Content
      <CarouselSpacing />
    </div>
  )
}
