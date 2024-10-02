import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../store/store'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
  EBodyShapeOption,
  ECutawayOption,
} from '~/models/options.model'
import { ELuthComponent } from '~/models/configuration.model'
import BackOptions from './BackOptions'

export default function Configurator() {
  const bodyOptions = useConfigurationStore((state) => state.bodyOptions)
  const setBodyOptions = useConfigurationStore((state) => state.setBodyOptions)

  const backOptions = useConfigurationStore((state) => state.backOptions)
  const setBackOptions = useConfigurationStore((state) => state.setBackOptions)

  const scope = useConfigurationStore((state) => state.scope)
  const setScope = useConfigurationStore((state) => state.setScope)

  const setControls = useConfigurationStore((state) => state.setControls)

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
          snap: { mass: 5, tension: 140 },
          config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Back:
        setControls({
          rotation: [Math.PI / 6, Math.PI - Math.PI / 8, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: { mass: 5, tension: 140 },
          config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Sides:
        setControls({
          rotation: [-Math.PI / 2.5, 0, -Math.PI / 3],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: { mass: 5, tension: 140 },
          config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.Binding:
        setControls({
          rotation: [0, -Math.PI / 3, -Math.PI / 5],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: { mass: 5, tension: 140 },
          config: { mass: 1, tension: 80 },
        })
        break
      case ELuthComponent.EndGraft:
        setControls({
          rotation: [-Math.PI / 2, 0, 0],
          zoom: 2,
          polar: [-Math.PI / 3, Math.PI / 3],
          azimuth: [-Math.PI / 4, Math.PI / 4],
          snap: { mass: 5, tension: 140 },
          config: { mass: 1, tension: 80 },
        })
        break
    }
  }

  useControls(
    'Configuration', // Store names
    {
      cutaway: {
        options: Object.values(ECutawayOption) as ECutawayOption[], // Use enum values
        value: bodyOptions.cutaway, // Default value
        onChange: (value: ECutawayOption) => {
          setBodyOptions({ cutaway: value })
        },
      },
      bodyShape: {
        options: Object.values(EBodyShapeOption) as EBodyShapeOption[],
        value: bodyOptions.bodyShape,
        onChange: (value) => setBodyOptions({ bodyShape: value }),
      },
      armBevel: {
        options: Object.values(EArmBevelOption) as EArmBevelOption[],
        value: bodyOptions.armBevel,
        onChange: (value) => setBodyOptions({ armBevel: value }),
      },
    },
  )

  // const { material, setMaterial, cutaway, setCutaway } = useConfiguration()
  return (
    <div className="absolute h-[160px] w-[320px]">
      <Leva />
      {/* <BackOptions /> */}
    </div>
  )
}
