import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { EFretboardExtensionOption, EFretboardRadiusOption } from '~/models/options.model'

export default function FretboardOptions() {
  const fretboardOptions = useConfigurationStore((state) => state.fretboardOptions)
  const setFretboardOptions = useConfigurationStore((state) => state.setFretboardOptions)

  useControls('Fretboard Options', {
    radius: {
      options: Object.values(EFretboardRadiusOption) as EFretboardRadiusOption[],
      value: fretboardOptions.radius,
      onChange: (value) => setFretboardOptions({ radius: value }),
    },
    extension: {
      options: Object.values(EFretboardExtensionOption) as EFretboardExtensionOption[],
      value: fretboardOptions.extension,
      onChange: (value) => setFretboardOptions({ extension: value }),
    },
  })

  return null
}
