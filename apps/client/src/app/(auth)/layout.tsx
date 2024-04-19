import React from 'react'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-gray-50">
      {children}
    </div>
  )
}
