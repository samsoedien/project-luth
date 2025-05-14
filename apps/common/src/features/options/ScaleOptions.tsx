import React from 'react'
import { Leva, useControls, useCreateStore } from 'leva'
import { useConfigurationStore } from '../../store/store'
import {
  EScaleAssymetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

export default function ScaleOptions() {
  const scaleOptions = useConfigurationStore((state) => state.scaleOptions)
  const setScaleOptions = useConfigurationStore((state) => state.setScaleOptions)

  useControls(
    'Scale Options', // Store names
    {
      scaleLength: {
        options: Object.values(EScaleLengthOption) as EScaleLengthOption[],
        value: scaleOptions.scaleLength,
        onChange: (value) => setScaleOptions({ scaleLength: value }),
      },
      assymetrical: {
        options: Object.values(EScaleAssymetrical) as EScaleAssymetrical[],
        value: scaleOptions.assymetrical,
        onChange: (value) => setScaleOptions({ assymetrical: value }),
      },
      fretHeelJoint: {
        options: Object.values(EScaleFretHeelJointOption) as EScaleFretHeelJointOption[],
        value: scaleOptions.fretHeelJoint,
        onChange: (value) => setScaleOptions({ fretHeelJoint: value }),
      },
    },
  )

  return <Leva />
}
