'use client'

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
  Spacer,
} from '@project-luth/core'
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { FormEvent, useState } from 'react'

type CheckoutFormProps = {
  products: any
  clientSecret: string
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

export default function CheckoutForm({ products, clientSecret }: CheckoutFormProps) {
  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <Form products={products} />
    </Elements>
  )
}

function Form({ products }: any) {
  const stripe = useStripe()
  const elements = useElements()

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [email, setEmail] = useState<string>()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (stripe == null || elements == null || email == null) return

    setIsLoading(true)

    const orderExist = false

    if (orderExist) setErrorMessage('You have already purchased this product')

    await stripe
      .confirmPayment({
        elements,
        confirmParams: { return_url: `${process.env.NEXT_PUBLIC_CLIENT_APP_URL}/checkout/success` },
      })
      .then(({ error }) => {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          setErrorMessage(error.message)
        } else {
          setErrorMessage('An unknown error has occured')
          console.error(error)
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">{errorMessage}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <PaymentElement />
          <Spacer />
          <LinkAuthenticationElement onChange={(e) => setEmail(e.value.email)} />
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={stripe == null || elements == null || isLoading}>
            {isLoading ? 'Purchasing...' : 'Pay amount'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
