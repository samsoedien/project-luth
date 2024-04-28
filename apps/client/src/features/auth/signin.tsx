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
import { api } from '~/config/trpc/react'

const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export default function SigninFeature() {
  return <SigninForm />
}

function SigninForm() {
  const [error, setError] = useState<string>()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const signIn = api.user.signin.useMutation({
    onSuccess: () => {
      setError('Success.')
    },
  })

  const onSubmit = () => {
    setError('')

    const { email, password } = form.getValues()

    console.log('submitted..')
    startTransition(() => {
      signIn.mutate({ email, password })
    })
  }

  return (
    <Card className="w-[420px] p-3">
      <CardHeader>
        <h2 className="text-3xl font-bold">Sign In</h2>
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
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              Sign in
            </Button>

            {/* <Button variant="secondary" onClick={sendMail} className="w-full" disabled={isPending}>
              Sign in via Resend
            </Button> */}

            {error && <AlertDestructive message={error} />}
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button variant="link" size="sm" className="text-black" asChild>
          <Link href="/signup">Don't have an account yet?</Link>
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
