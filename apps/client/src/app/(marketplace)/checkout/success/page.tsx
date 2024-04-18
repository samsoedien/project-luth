import { notFound } from 'next/navigation'
import React from 'react'
import Stripe from 'stripe'

export default async function CheckoutPaymentSuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

  const paymentIntent = await stripe.paymentIntents.retrieve(searchParams.payment_intent)

  if (paymentIntent.metadata.productId == null) return notFound()

  const isSuccess = paymentIntent.status === 'succeeded'

  return (
    <div>
      <h3 className="text-3xl">{isSuccess ? 'Success!' : 'Error'}</h3>
      CheckoutPaymentSuccessPage
    </div>
  )
}
