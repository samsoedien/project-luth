import { Grid } from '@project-luth/core'
import { unstable_noStore as noStore } from 'next/cache'

import { getServerAuthSession } from '~/server/auth'
import { api } from '~/trpc/server'

export default async function Home(): Promise<JSX.Element> {
  noStore()
  const hello = await api.post.hello.query({ text: 'from tRPC' })
  console.log(hello)
  const session = await getServerAuthSession()

  return (
    <>
      {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "> */}
      {/* </div> */}
      <Grid container>
        <Grid xs={12} md={8}>
          <div className="h-[360px] w-full bg-blue-100">Column 8</div>
        </Grid>
        <Grid xs={12} md={4}>
          <div className="h-[360px] w-full bg-blue-100">Column 4</div>
        </Grid>
      </Grid>
    </>
  )
}
