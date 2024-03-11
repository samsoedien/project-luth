import type { Meta } from '@storybook/preact'
import { Button as RadixButton } from '../ui/button'
import React from 'react'

export default {
  title: 'Core/Button',
  component: RadixButton,
} as Meta

export const DefaultButton = {
  render: () => <RadixButton>Default</RadixButton>,
}
export const DestructiveButton = {
  render: () => <RadixButton variant="destructive">Destructive</RadixButton>,
}
