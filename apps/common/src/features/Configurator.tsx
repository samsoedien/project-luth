import React from 'react'
import { Leva, useControls } from 'leva'
import { ECutawayOption } from './3d-configurator/configurationOptions'
import { IConfiguration, ELuthComponent, useConfigurationStore } from '../store/store'

export default function Configurator() {
  const setComponentConfiguration = useConfigurationStore(
    (state) => state.setComponentConfiguration,
  )
  // const setCutaway = useConfigurationStore((state) => state.setCutaway)
  // const setMeshVisibilityConfig = useConfigurationStore((state) => state.setMeshVisibilityConfig)

  // useControls<{}>(
  //   'Configuration', // Store name
  //   {
  //     cutaway: {
  //       options: Object.values(ECutawayOption) as ECutawayOption[], // Use enum values
  //       value: ECutawayOption.None, // Default value
  //       onChange: (value: ECutawayOption) => {
  //         if (value === ECutawayOption.Florentine)
  //           setComponentConfiguration(ELuthComponent.Soundboard, [
  //             'Body_Soundboard_Florentine_Cutaway_1',
  //           ])
  //       }, // Optional handler
  //     },
  //     armBevel: false,
  //   },
  // )

  // console.log(cutaway)

  // const { material, setMaterial, cutaway, setCutaway } = useConfiguration()
  return (
    <div className="absolute h-[160px] w-[320px]">
      <Leva />
    </div>
  )
}
