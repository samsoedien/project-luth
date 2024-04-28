import { Grid } from '@project-luth/core'
import React from 'react'

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div>
      <Grid container>
        <Grid xs={12}>
          <div className="h-[360px] w-full">{children}</div>
        </Grid>
      </Grid>
    </div>
  )
}
