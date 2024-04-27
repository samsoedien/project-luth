'use client'

import { Button } from '@project-luth/core'

import { ArrowRightIcon } from '@project-luth/icons'

export function HeroBanner() {
  return (
    <div className="flex h-[320px] flex-col items-center justify-center">
      <Button variant="secondary" size="sm">
        Introducing workbenches <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
      <h2 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        Build & create your dream guitar
      </h2>
      <p className="text-foreground text-md max-w-[750px] pt-1 text-center font-light">
        Create your dream guitar with our workbenches. Choose from a wide range of materials and
        designs to create a guitar that is truly unique to you.
      </p>
      <div className="mt-3 flex">
        <Button size="sm">Connect with builder</Button>
        <Button size="sm" variant="link">
          Browse creations
        </Button>
      </div>
    </div>

    // <div className="flex h-96 w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 px-5">
    //   <div className="w-[460px] py-5">
    //     <h2 className="mb-2 text-5xl font-medium text-white">Project Luth</h2>
    //     <p className="text-sm text-white">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit recusandae unde
    //       animi corporis fugit aliquid? A molestias aliquam vitae voluptates nulla mollitia cumque
    //       eius, rerum saepe beatae non id soluta.
    //     </p>
    //     <Button className=" text-white" variant="link">
    //       Get started
    //     </Button>
    //   </div>
    //   <div className="w-[960px] py-5"></div>
    // </div>
  )
}
