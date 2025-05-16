import { Leva, useControls } from 'leva'
import { useConfigurationStore } from '../../store/store'
import {
  EBodyArmBevelOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  EBodyDepthOption,
} from '~/models/options.model'

export default function BodyOptions() {
  const bodyOptions = useConfigurationStore((state) => state.bodyOptions)
  const setBodyOptions = useConfigurationStore((state) => state.setBodyOptions)

  // const config = {
  //   component: 'Soundboard',
  //   bodyShape: 'Dread',
  //   depth: 'Thinline',
  //   fretAccess: 'Fret14',
  //   cutaway: 'CWVen',
  //   bracing: 'ABStd',
  //   type: 'Mesh',
  // }

  // const meshName = Object.values(config).join('__')

  const configuration = {
    component: 'Soundboard',
    fusionConfig: 'Dread_Thinline_Fret14',
    meshVariants: 'CWVen_ABStd',
    type: 'Mesh',
  }

  const meshName1 = Object.values(configuration).join('__')

  console.log(meshName1)

  useControls(
    'Body Options', // Store names
    {
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
