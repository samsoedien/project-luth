import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import {
  EBodyArmBevelOption,
  EBackMultiPieceOption,
  EBodyShapeOption,
  EBodyCutawayOption,
} from '~/models/options.model'
import { ELuthComponent } from '~/models/configuration.model'
// import { useUpdateConfiguration } from '~/hooks/useUpdateConfiguration'

export default function BackOptions() {
  const backOptions = useConfigurationStore((state) => state.backOptions)
  const setBackOptions = useConfigurationStore((state) => state.setBackOptions)

  // Use the hook to update the configuration whenever options change
  // useUpdateConfiguration(ELuthComponent.Back, backOptions, [bodyOptions], selectBackMeshes)
  useControls(
    'Back Options', // Store names
    {
      back: {
        options: Object.values(EBackMultiPieceOption) as EBackMultiPieceOption[],
        value: backOptions.backMultiPiece,
        onChange: (value) => setBackOptions({ backMultiPiece: value }),
      },
    },
  )

  return null
}
