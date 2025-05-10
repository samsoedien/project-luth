import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { EArmBevelOption, EBodyShapeOption, ECutawayOption } from '~/models/options.model'

export default function BodyOptions() {
  const bodyOptions = useConfigurationStore((state) => state.bodyOptions)
  const setBodyOptions = useConfigurationStore((state) => state.setBodyOptions)

  useControls(
    'Body Options', // Store names
    {
      bodyShape: {
        options: Object.values(EBodyShapeOption) as EBodyShapeOption[],
        value: bodyOptions.bodyShape,
        onChange: (value) => setBodyOptions({ bodyShape: value }),
      },
      cutaway: {
        options: Object.values(ECutawayOption) as ECutawayOption[], // Use enum values
        value: bodyOptions.cutaway, // Default value
        onChange: (value: ECutawayOption) => {
          setBodyOptions({ cutaway: value })
        },
      },
      armBevel: {
        options: Object.values(EArmBevelOption) as EArmBevelOption[],
        value: bodyOptions.armBevel,
        onChange: (value) => setBodyOptions({ armBevel: value }),
      },
    },
  )

  return <Leva />
}
