import React from 'react'
import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import { ENeckShapeOption } from '~/models/options.model'

export default function NeckOptions() {
  const neckOptions = useConfigurationStore((state) => state.neckOptions)
  const setNeckOptions = useConfigurationStore((state) => state.setNeckOptions)

  useControls('Neck Options', {
    profileShape: {
      options: Object.values(ENeckShapeOption) as ENeckShapeOption[],
      value: neckOptions.profileShape,
      onChange: (value) => setNeckOptions({ profileShape: value }),
    },
  })

  return <Leva />
}
