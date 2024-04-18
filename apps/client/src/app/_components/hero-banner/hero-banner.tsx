'use client'

import { Button } from '@project-luth/core'

export function HeroBanner() {
  return (
    <div className="flex h-96 w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 px-5">
      <div className="w-[460px] py-5">
        <h2 className="mb-2 text-5xl font-medium text-white">Project Luth</h2>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit recusandae unde
          animi corporis fugit aliquid? A molestias aliquam vitae voluptates nulla mollitia cumque
          eius, rerum saepe beatae non id soluta.
        </p>
        <Button className=" text-white" variant="link">
          Get started
        </Button>
      </div>
      <div className="w-[960px] py-5"></div>
    </div>
  )
}
