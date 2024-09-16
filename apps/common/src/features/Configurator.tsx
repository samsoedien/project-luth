import React from 'react'
import { useConfiguration } from '../contexts/Configurator'
import { Leva, useControls } from 'leva'
import { ECutawayOption } from './3d-configurator/configurationOptions'
import { IConfiguration, useConfigurationStore } from '../store/store'

export default function Configurator() {
  const cutaway = useConfigurationStore((state) => state.cutaway)
  const setCutaway = useConfigurationStore((state) => state.setCutaway)
  const setMeshVisibilityConfig = useConfigurationStore((state) => state.setMeshVisibilityConfig)

  useControls<IConfiguration, {}, 'Configuration'>(
    'Configuration', // Store name
    {
      cutaway: {
        options: Object.values(ECutawayOption) as ECutawayOption[], // Use enum values
        value: ECutawayOption.None, // Default value
        onChange: (value: ECutawayOption) => {
          setCutaway(ECutawayOption[value])
          setMeshVisibilityConfig()
        }, // Optional handler
      },
      armBevel: false,
    },
  )

  console.log(cutaway)

  // const { material, setMaterial, cutaway, setCutaway } = useConfiguration()
  return (
    <div className="absolute h-[160px] w-[320px]">
      <Leva />
    </div>
  )
}
