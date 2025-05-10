import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { ESoundHoleOption } from '~/models/options.model'

export default function SoundboardOptions() {
  const soundboardOptions = useConfigurationStore((state) => state.soundboardOptions)
  const setSoundboardOptions = useConfigurationStore((state) => state.setSoundboardOptions)

  // Use the hook to update the configuration whenever options change
  // useUpdateConfiguration(ELuthComponent.Back, backOptions, [bodyOptions], selectBackMeshes)
  useControls(
    'Soundboard Options', // Store names
    {
      soundboard: {
        options: Object.values(ESoundHoleOption) as ESoundHoleOption[],
        value: soundboardOptions.soundHole,
        onChange: (value) => setSoundboardOptions({ soundHole: value }),
      },
    },
  )

  return <Leva />
}
