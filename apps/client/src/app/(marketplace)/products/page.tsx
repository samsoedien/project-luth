import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Grid,
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Spacer,
} from '@project-luth/core'
// import { CarouselSpacing } from '~/components/carousel/carousel'
import CreateProductForm from '~/components/create-product/create-product-form'
import { auth } from '~/auth'

import { api } from '~/config/trpc/server'

interface IProductCardProps {
  name: string
  description: string
  priceInCents: number
}

async function getProducts() {
  return [
    {
      id: 1,
      title: 'Product A',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ut dolore labore explicabo nobis numquam dolores, ipsam, voluptatem nemo adipisci velit sapiente sequi esse aspernatur dignissimos laudantium inventore eligendi voluptates.',
      body: 'Products content',
    },
    {
      id: 2,
      title: 'Product B',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ut dolore labore explicabo nobis numquam dolores, ipsam, voluptatem nemo adipisci velit sapiente sequi esse aspernatur dignissimos laudantium inventore eligendi voluptates.',
      body: 'Products content',
    },
    {
      id: 3,
      title: 'Product C',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ut dolore labore explicabo nobis numquam dolores, ipsam, voluptatem nemo adipisci velit sapiente sequi esse aspernatur dignissimos laudantium inventore eligendi voluptates.',
      body: 'Products content',
    },
  ]

  // await api.order.aggregate({
  //   _sum: { pricePaidInCents: true },
  //   _count: true,
  // })
}

export default async function ProductsPage() {
  const session = await auth()
  if (!session?.user) return null

  // const products = await getProducts()

  const products = await api.product.getAll.query()

  console.log(products)
  // const posts = await api.post.findMany()

  return (
    <>
      <AddProductDialog>Add guitar</AddProductDialog>
      <Spacer />
      <Grid container>
        {products.map((product) => (
          <Grid key={product.name} sm={4}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

function ProductCard({ name, description, priceInCents }: IProductCardProps) {
  return (
    <Card className="mb-4 h-[320px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="max-h-[180px] overflow-hidden">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{priceInCents}</p>
      </CardContent>
    </Card>
  )
}

function AddProductDialog({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{children}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add product</DialogTitle>
            <DialogDescription>
              Add a guitar to your store. You can add as many products as you want.
            </DialogDescription>
          </DialogHeader>
          <CreateProductForm />
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  )
}
