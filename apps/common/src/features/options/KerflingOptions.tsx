import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { EKerflingVariant } from '~/models/options.model'

export default function KerflingOptions() {
  const kerflingOptions = useConfigurationStore((state) => state.kerflingOptions)
  const setKerflingOptions = useConfigurationStore((state) => state.setKerflingOptions)

  // Use the hook to update the configuration whenever options change
  // useUpdateConfiguration(ELuthComponent.Back, backOptions, [bodyOptions], selectBackMeshes)
  useControls(
    'Kerfling Options', // Store names
    {
      variant: {
        options: Object.values(EKerflingVariant) as EKerflingVariant[],
        value: kerflingOptions.variant,
        onChange: (value) => setKerflingOptions({ variant: value }),
      },
    },
  )

  return <Leva />
}
