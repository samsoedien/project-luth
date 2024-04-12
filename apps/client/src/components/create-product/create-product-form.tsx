'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@project-luth/core'
import { api } from '~/trpc/react'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  description: z.string(),
  priceInCents: z.number(),
})

export default function CreateProductForm() {
  const router = useRouter()

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      console.log('Product created')
      router.refresh()
    },
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, debitis aliquid perferendis, facere quod veritatis, commodi illum exercitationem culpa voluptatibus expedita quia. Iste iure rerum explicabo hic consequatur, corrupti velit!',
      priceInCents: 89900,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    createProduct.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product title</FormLabel>
              <FormControl>
                <Input placeholder="Product title" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
