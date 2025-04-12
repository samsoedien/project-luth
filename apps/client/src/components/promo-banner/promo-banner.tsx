'use client'

type PromoBannerProps = {
  text: string
}

export default function PromoBanner({ text }: PromoBannerProps) {
  return (
    <div className="flex h-[36px] items-center justify-center bg-yellow-100 text-center text-xs font-bold">
      {text}
    </div>
  )
}
