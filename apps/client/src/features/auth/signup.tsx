'use client'

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Alert,
  AlertDescription,
  AlertTitle,
} from '@project-luth/core'

import { TriangleAlertIcon } from '@project-luth/icons'

import Link from 'next/link'
import React, { useState, useTransition } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'
import { api } from '~/trpc/react'

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
})

export default function SignupFeature() {
  return <SignupForm />
}

function SignupForm() {
  const [error, setError] = useState<string>()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const createUser = api.user.create.useMutation({
    onSuccess: () => {
      setError('Success.')
    },
  })

  const onSubmit = () => {
    setError('')

    const { email, password, confirmPassword } = form.getValues()

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      throw new Error('Passwords do not match')
    }

    startTransition(() => {
      createUser.mutate({ email, password, confirmPassword })
    })
  }

  return (
    <Card className="w-[420px] p-3">
      <CardHeader>
        <h2 className="text-3xl font-bold">Sign Up</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="Password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="Confirm password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              Sign up
            </Button>

            {error && <AlertDestructive message={error} />}
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button variant="link" size="sm" className="text-black" asChild>
          <Link href="/signin">Already have an account?</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function AlertDestructive({ message }: { message: string }) {
  return (
    <Alert variant="destructive">
      <TriangleAlertIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
