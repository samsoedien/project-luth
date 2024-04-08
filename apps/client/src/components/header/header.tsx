import React from 'react'
import { Navbar } from '../navbar/navbar'
import PromoBanner from '../promo-banner/promo-banner'
import { HeroBanner } from '../hero-banner/hero-banner'
import { Session } from 'next-auth'

interface IHeaderProps {
  session: Session | null
}

export default function Header({ session }: IHeaderProps) {
  return (
    <header className="relative">
      <PromoBanner />
      <Navbar session={session} />
      <HeroBanner />
    </header>
  )
}
