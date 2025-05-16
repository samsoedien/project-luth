import React from 'react'
import { Leva, useControls, useCreateStore } from 'leva'
import { useConfigurationStore } from '../../store/store'
import {
  EBodyArmBevelOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  EBodyOrientationOption,
  EBodyDepthOption,
  EBodyTypeOption,
} from '~/models/options.model'

export default function BodyOptions() {
  const bodyOptions = useConfigurationStore((state) => state.bodyOptions)
  const setBodyOptions = useConfigurationStore((state) => state.setBodyOptions)

  const record = useConfigurationStore((state) => state.record)

  useControls(
    'Body Options', // Store names
    {
      bodyShape: {
        options: Object.values(EBodyShapeOption) as EBodyShapeOption[],
        value: bodyOptions.bodyShape,
        onChange: (value) => setBodyOptions({ bodyShape: value }),
      },
      bodyType: {
        options: Object.values(EBodyTypeOption) as EBodyTypeOption[],
        value: bodyOptions.bodyType,
        onChange: (value) => setBodyOptions({ bodyType: value }),
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
