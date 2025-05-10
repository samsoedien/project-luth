import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../store/store'

import { ELuthComponent } from '~/models/configuration.model'
import BodyOptions from './options/BodyOptions'
import SoundboardOptions from './options/SoundboardOptions'
import ScaleOptions from './options/ScaleOptions'
import BackOptions from './options/BackOptions'

export default function Configurator() {
  const scope = useConfigurationStore((state) => state.scope)
  const setScope = useConfigurationStore((state) => state.setScope)

  const setControls = useConfigurationStore((state) => state.setControls)

  const undo = useConfigurationStore((state) => state.undo)
  const redo = useConfigurationStore((state) => state.redo)

  const history = useConfigurationStore((state) => state.history)
  console.log('History:', history)

  useControls('Scope', {
    scope: {
      options: Object.values(ELuthComponent) as ELuthComponent[],
      value: scope,
      onChange: (value: ELuthComponent) => {
        setScope(value)

        setControlsFromScope(value)
      },
    },
  })

  const setControlsFromScope = (scope: ELuthComponent) => {
    switch (scope) {
      case ELuthComponent.Base:
        setControls({
          rotation: [0, -Math.PI / 5, 0],
          zoom: undefined,
          polar: undefined,
          azimuth: undefined,
          snap: false,
        })
        break
      case ELuthComponent.Soundboard:
        setControls({
          rotation: [0, 0, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,

          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Back:
        setControls({
          rotation: [Math.PI / 6, Math.PI - Math.PI / 8, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Sides:
        setControls({
          rotation: [-Math.PI / 2.5, 0, -Math.PI / 3],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Binding:
        setControls({
          rotation: [0, -Math.PI / 3, -Math.PI / 5],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.EndGraft:
        setControls({
          rotation: [-Math.PI / 2, 0, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: true,
          // snap: { mass: 5, tension: 140 },
          // config: { mass: 1, tension: 80 },
        })
        break
    }
  }

  return (
    <div>
      <Leva />
      <BodyOptions />
      <ScaleOptions />
      <SoundboardOptions />
      <BackOptions />
      <div className="absolute bottom-0 left-0 p-4">
        <button onClick={undo}>Undo Action</button>
        <button onClick={redo}>Redo Action</button>
      </div>
    </div>
  )
}
