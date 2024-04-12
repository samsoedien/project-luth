import React from 'react'
import Cart from '~/features/cart'

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function CartPage() {
  const product = { id: 1 }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 89900,
    currency: 'EUR',
    metadata: { productId: product.id },
  })

  if (paymentIntent.client_secret != null) throw new Error('Stripe failed to create payment intent')

  return <Cart />
}
