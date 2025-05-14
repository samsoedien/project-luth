import React from 'react'
import { Leva, useControls, useCreateStore } from 'leva'
import { useConfigurationStore } from '../../store/store'
import {
  EBodyArmBevelOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  EBodyOrientationOption,
  EBodyDepthOption,
} from '~/models/options.model'

export default function BodyOptions() {
  const bodyOptions = useConfigurationStore((state) => state.bodyOptions)
  const setBodyOptions = useConfigurationStore((state) => state.setBodyOptions)

  useControls(
    'Body Options', // Store names
    {
      orientation: {
        options: Object.values(EBodyOrientationOption) as EBodyOrientationOption[],
        value: bodyOptions.orientation,
        onChange: (value) => setBodyOptions({ orientation: value }),
      },
      bodyShape: {
        options: Object.values(EBodyShapeOption) as EBodyShapeOption[],
        value: bodyOptions.bodyShape,
        onChange: (value) => setBodyOptions({ bodyShape: value }),
      },
      bodyDepth: {
        options: Object.values(EBodyDepthOption) as EBodyDepthOption[],
        value: bodyOptions.bodyDepth,
        onChange: (value) => setBodyOptions({ bodyDepth: value }),
      },
      cutaway: {
        options: Object.values(EBodyCutawayOption) as EBodyCutawayOption[], // Use enum values
        value: bodyOptions.cutaway, // Default value
        onChange: (value: EBodyCutawayOption) => {
          setBodyOptions({ cutaway: value })
        },
      },
      armBevel: {
        options: Object.values(EBodyArmBevelOption) as EBodyArmBevelOption[],
        value: bodyOptions.armBevel,
        onChange: (value) => setBodyOptions({ armBevel: value }),
      },
    },
  )

  return <Leva />
}
