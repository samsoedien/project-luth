import { getServerAuthSession } from '~/server/auth'

export default async function InventoryPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  return <div>Inventory Content</div>
}
