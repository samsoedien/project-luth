import { getServerAuthSession } from '~/server/auth'

import Stripe from 'stripe'
import CheckoutForm from './_components/checkout'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

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

export default async function CheckoutPage() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  const products = await getProducts()

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 89900,
    currency: 'EUR',
    metadata: { productId: products[0]?.id as number },
  })

  if (paymentIntent.client_secret == null) throw new Error('Stripe failed to create payment intent')

  return <CheckoutForm products={products} clientSecret={paymentIntent.client_secret} />
}
