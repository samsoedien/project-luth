import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { ERosetteVariantOption } from '~/models/options.model'
// import { useUpdateConfiguration } from '~/hooks/useUpdateConfiguration'

export default function RosetteOptions() {
  const rosetteOptions = useConfigurationStore((state) => state.rosetteOptions)
  const setRosetteOptions = useConfigurationStore((state) => state.setRosetteOptions)

  // Use the hook to update the configuration whenever options change
  // useUpdateConfiguration(ELuthComponent.Back, backOptions, [bodyOptions], selectBackMeshes)
  useControls(
    'Rosette Options', // Store names
    {
      rosette: {
        options: Object.values(ERosetteVariantOption) as ERosetteVariantOption[],
        value: rosetteOptions.variant,
        onChange: (value) => setRosetteOptions({ variant: value }),
      },
    },
  )

  return null
}
