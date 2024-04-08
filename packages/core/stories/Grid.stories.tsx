import type { Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { Grid } from '../src/layout'
import React from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Grid>

export default meta
// type Story = StoryObj<typeof meta>

export const GridTest = {
  render: () => <Grid />,
}

export const GridLayout = {
  render: () => (
    <Grid container>
      <Grid xs={8}>
        <div className="luth-bg-blue-100 h-[360px] w-full">Column 8</div>
      </Grid>
      <Grid xs={4}>
        <div className="luth-bg-blue-100 h-[360px] w-full">Column 4</div>
      </Grid>
    </Grid>
  ),
}
