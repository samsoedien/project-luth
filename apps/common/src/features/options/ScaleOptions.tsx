import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { EScaleLengthOption } from '~/models/options.model'

export default function ScaleOptions() {
  const scaleOptions = useConfigurationStore((state) => state.scaleOptions)
  const setScaleOptions = useConfigurationStore((state) => state.setScaleOptions)

  useControls(
    'Scale Options', // Store names
    {
      scaleLength: {
        options: Object.values(EScaleLengthOption) as EScaleLengthOption[],
        value: scaleOptions.scaleLength,
        onChange: (value) => setScaleOptions({ scaleLength: value }),
      },
    },
  )

  return <Leva />
}
