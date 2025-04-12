'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  cn,
} from '@project-luth/core'
import React from 'react'

const marketplaceNavItems: { title: string; href: string; description: string }[] = [
  {
    title: 'Products',
    href: '/products',
    description: 'Discover design plans.',
  },
  {
    title: 'Builders',
    href: '/builders',
    description: 'Find a craftsman/builder.',
  },
  {
    title: 'Stories',
    href: '/',
    description: '',
  },
]

const workshopNavItems: { title: string; href: string; description: string }[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Customers',
    href: '/customers',
    description: 'Customer Relationship Management for establishing effective communication ',
  },
  {
    title: 'Projects',
    href: '/projects',
    description: 'Project management.',
  },
  {
    title: 'Showcase Portfolio',
    href: '/showcase',
    description: 'Create an compelling business card of your craft.',
  },
  {
    title: '...',
    href: '/',
    description: '...',
  },
  {
    title: '...',
    href: '/',
    description: '...',
  },
]

const communityNavItem: { title: string; href: string; description: string } = {
  title: 'Community',
  href: '/community',
  description: '',
}

export function Navigation(): JSX.Element {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Marketplace</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">Explore guitars</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Personalize your own signature guitar
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {marketplaceNavItems.map((navItem) => (
                <ListItem key={navItem.title} title={navItem.title} href={navItem.href}>
                  {navItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Workshop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {workshopNavItems.map((navItem) => (
                <ListItem key={navItem.title} title={navItem.title} href={navItem.href}>
                  {navItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={communityNavItem.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {communityNavItem.title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  ),
)
ListItem.displayName = 'ListItem'
