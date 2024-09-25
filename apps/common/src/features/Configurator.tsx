import React from 'react'
import { Leva, useControls } from 'leva'
import { IConfiguration, ELuthComponent, useConfigurationStore } from '../store/store'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
  EBodyShapeOption,
  ECutawayOption,
} from '~/models/options.model'

export default function Configurator() {
  const options = useConfigurationStore((state) => state.options)
  const setOptions = useConfigurationStore((state) => state.setOptions)

  useControls(
    'Configuration', // Store names
    {
      cutaway: {
        options: Object.values(ECutawayOption) as ECutawayOption[], // Use enum values
        value: options.cutaway, // Default value
        onChange: (value: ECutawayOption) => {
          setOptions({ cutaway: value })
        },
      },
      bodyShape: {
        options: Object.values(EBodyShapeOption) as EBodyShapeOption[],
        value: options.bodyShape,
        onChange: (value) => setOptions({ bodyShape: value }),
      },
      armBevel: {
        options: Object.values(EArmBevelOption) as EArmBevelOption[],
        value: options.armBevel,
        onChange: (value) => setOptions({ armBevel: value }),
      },
      back: {
        options: Object.values(EBackMultiPieceOption) as EBackMultiPieceOption[],
        value: options.backMultiPiece,
        onChange: (value) => setOptions({ backMultiPiece: value }),
      },
    },
  )

  // console.log(cutaway)

  // const { material, setMaterial, cutaway, setCutaway } = useConfiguration()
  return (
    <div className="absolute h-[160px] w-[320px]">
      <Leva />
    </div>
  )
}
