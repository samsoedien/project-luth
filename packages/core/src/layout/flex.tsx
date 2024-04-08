'use client'

import clsx from 'clsx'

interface IFlexProps {
  direction: 'row' | 'column'
}

export default function Flex({ direction }: IFlexProps) {
  return <div className={clsx({ 'flex-col': direction === 'column' })}></div>
}
