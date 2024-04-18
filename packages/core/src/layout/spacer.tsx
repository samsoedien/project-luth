'use client'

import { clsx } from 'clsx'

interface ISpacerProps {
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'
}

export default function Spacer({ size = 'small' }: ISpacerProps) {
  return (
    <div
      className={clsx({
        'p-1': size === 'xx-small',
        'p-2': size === 'x-small',
        'p-3': size === 'small',
        'p-4': size === 'medium',
        'p-5': size === 'large',
        'p-6': size === 'x-large',
        'p-7': size === 'xx-large',
      })}
    ></div>
  )
}
