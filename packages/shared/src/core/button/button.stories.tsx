import type { Meta } from '@storybook/preact'
import { Button as RadixButton } from './button'
import React from 'react'

export default {
  title: 'Core/Button',
  component: RadixButton,
} as Meta

export const DefaultButton = {
  render: () => <RadixButton>Default</RadixButton>,
}
