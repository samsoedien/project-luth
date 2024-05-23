import { auth } from '~/auth'

export default async function InventoryPage() {
  const session = await auth()
  if (!session?.user) return null

  return <div>Inventory Content</div>
}
