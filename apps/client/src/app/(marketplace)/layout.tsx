import React from 'react'

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <main className="min-h-screen bg-blue-50 ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          test
          {children}
        </div>
      </main>
    </>
  )
}
