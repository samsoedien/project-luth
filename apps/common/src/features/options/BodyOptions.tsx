import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { EBodyArmBevelOption, EBodyShapeOption, EBodyCutawayOption } from '~/models/options.model'

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
