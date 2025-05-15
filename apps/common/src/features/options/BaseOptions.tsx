import React from 'react'
import { Leva, useControls, useCreateStore } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { EBaseOrientationOption } from '~/models/options.model'

export default function BaseOptions() {
  const baseOptions = useConfigurationStore((state) => state.baseOptions)
  const setBaseOptions = useConfigurationStore((state) => state.setBaseOptions)

  useControls(
    'Base Options', // Store names
    {
      orientation: {
        options: Object.values(EBaseOrientationOption) as EBaseOrientationOption[],
        value: baseOptions.orientation,
        onChange: (value) => setBaseOptions({ orientation: value }),
      },
    },
  )

  return <Leva />
}
