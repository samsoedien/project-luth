import Link from 'next/link'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@project-luth/core'

export default function AccountPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
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
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Store Name</CardTitle>
                <CardDescription>Used to identify your store in the marketplace.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Store Name" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Profile photo</CardTitle>
                <CardDescription>
                  Change and upload a profile photo to be displayed in the marketplace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" type="file" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
