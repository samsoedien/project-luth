'use client'

import { Navbar } from '../navbar/navbar'
import PromoBanner from '../../../components/promo-banner/promo-banner'
import { HeroBanner } from '../hero-banner/hero-banner'
import { type Session } from 'next-auth'

import { usePathname } from 'next/navigation'

interface IHeaderProps {
  session: Session | null
  profilePhoto?: string
}

export default function Header({ session, profilePhoto }: IHeaderProps) {
  const route = usePathname()

  const isRoot = route === '/' ? true : false

  return (
    <header className="relative">
      {isRoot && (
        <PromoBanner
          text={'Early bird promo available. Early signups get 50% off for the first 3 months!'}
        />
      )}
      <Navbar session={session} profilePhoto={profilePhoto} />
      {isRoot && <HeroBanner />}
    </header>
  )
}
