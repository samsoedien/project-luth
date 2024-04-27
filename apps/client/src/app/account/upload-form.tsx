'use client'
import Link from 'next/link'

import Image from 'next/image'

// import { signOut } from '~/auth'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@project-luth/core'
import { type PutBlobResult } from '@vercel/blob'
import { useRef, useState } from 'react'
import { api } from '~/trpc/react'
import { useRouter } from 'next/navigation'

export default function UploadForm({
  image,
  sendMail,
}: {
  image?: string | null
  sendMail: () => void
}) {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [blob, setBlob] = useState<PutBlobResult | null>(null)
  const router = useRouter()

  const createProfilePicture = api.user.updateProfilePicture.useMutation({
    onSuccess: () => {
      console.log('Profile photo created')
      router.refresh()
    },
  })

  const handleSubmit = async () => {
    console.log('submitting')

    if (!inputFileRef.current?.files) {
      throw new Error('No file selected')
    }

    const file = inputFileRef.current.files[0]

    if (file) {
      const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      })

      const newBlob = (await response.json()) as PutBlobResult

      setBlob(newBlob)

      createProfilePicture.mutate({ filePath: newBlob.url })
    }
  }

  // const handleSignOut = () => signOut()

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        {/* <Button className="w-20" onClick={handleSignOut}>
          Sign out
        </Button> */}
        <Button onClick={sendMail}>Send Email</Button>

        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="text-muted-foreground grid gap-4 text-sm" x-chunk="dashboard-04-chunk-0">
            <Link href="#" className="text-primary font-semibold">
              General
            </Link>
            <Link href="#">Security</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Profile photo</CardTitle>
                <CardDescription>
                  Change and upload a profile photo to be displayed in the marketplace.
                </CardDescription>
              </CardHeader>
              <div className="flex flex-col gap-4">
                <CardContent>
                  <Image
                    src={blob?.url ?? image ?? ''}
                    alt="Profile picture"
                    width={120}
                    height={120}
                  />

                  <Label htmlFor="picture">Picture</Label>
                  <Input name="file" ref={inputFileRef} required id="picture" type="file" />
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button onClick={() => handleSubmit()}>Save</Button>
                </CardFooter>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
