import Link from 'next/link'
import { CircleUser, Guitar, Menu, Package2, Search, ShoppingCartIcon } from '@project-luth/icons'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@project-luth/core'

import ThemeModeToggle from '../../../theme/theme-mode-toggle'
import { Navigation } from '../../../components/navigation-menu/navigation-menu'
import { type Session } from 'next-auth'

import SheetSide from '../../../components/side-drawer/side-drawer'

type NavbarProps = {
  session: Session | null
}

export function Navbar({ session }: NavbarProps): JSX.Element {
  return (
    // <div className="flex min-h-screen w-full flex-col">
    <header className="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Guitar className="h-6 w-6" />
          <h1 className="ml-2 text-2xl font-bold">Luth</h1>
          <span className="sr-only">Project Luth</span>
        </Link>
        {/* <Link
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Orders
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Customers
        </Link>
        <Link
          href="#"
          className="text-foreground hover:text-foreground transition-colors"
        >
          Settings
        </Link> */}

        <Navigation />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Orders
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Customers
            </Link>
            <Link href="#" className="hover:text-foreground">
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          {/* <div className="relative">
            <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div> */}
        </form>
        <Button asChild variant="secondary">
          <Link href="/onboarding">Start building</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>

          {session ? (
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="/account"> My Account</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {' '}
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {' '}
                <Link href="/support">Support</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={session ? '/api/auth/signout' : '/api/auth/signin'}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/api/auth/signin">Signin</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
        <SheetSide />

        <ThemeModeToggle />
      </div>
    </header>
    // </div>
  )
}
