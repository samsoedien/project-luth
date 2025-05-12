import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { IConfiguration } from '../../models/configuration.model'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IStringsMeshesProps {
  configuration: IConfiguration
}

export default function StringsMeshes({ configuration }: IStringsMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="gray" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={1}>
        <instances.BodyStringLowE name="Body_String_LowE" />
        <instances.BodyStringA name="Body_String_A" />
        <instances.BodyStringD name="Body_String_D" />
        <instances.BodyStringG name="Body_String_G" />
        <instances.BodyStringB name="Body_String_B" />
        <instances.BodyStringHighE name="Body_String_HighE" />
      </group>
    </group>
  )
}
