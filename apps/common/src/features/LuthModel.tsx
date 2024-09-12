import React, { ComponentType, useState } from 'react'

interface IProps {
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void
  configuration: IConfiguration
  // onPointerDown: (e: ThreeEvent<PointerEvent>) => void
}

export enum EBodyShape {
  DREADNOUGHT = 'DREADNOUGHT',
  OM = 'OM',
}

export enum ECutawayOption {
  NONE = 'NONE',
  VENETIAN = 'VENETIAN',
  FLORENTINE = 'FLORENTINE',
  SCALLOPED = 'SCALLOPED',
}

export interface IConfiguration {
  cutaway: ECutawayOption
  armBevel: boolean
}

export default function withConfiguration<P>(GLTFJSXComponent: ComponentType<P & IProps>) {
  return (props: P) => {
    const [configuration, setConfiguration] = useState<IConfiguration>({
      cutaway: ECutawayOption.NONE,
      armBevel: false,
    })

    const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()
      console.log(e.object.name)
    }

    const onClick = (e: any) => {
      console.log('set configuration...')
      setConfiguration({
        cutaway: ECutawayOption.VENETIAN,
        armBevel: false,
      })
    }

    console.log('GLTFJSXComponent:', GLTFJSXComponent)

    return (
      <GLTFJSXComponent
        {...props}
        onPointerOver={onPointerOver}
        onClick={onClick}
        configuration={configuration}
      />
    )
  }
}

// onPointerOver={onPointerOver} onPointerDown={onPointerDown}
