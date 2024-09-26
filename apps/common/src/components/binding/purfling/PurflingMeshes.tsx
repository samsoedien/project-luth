import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IPurflingMeshesProps {
  configuration?: IConfiguration
}

export default function PurflingMeshes({ configuration }: IPurflingMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="black" />
          </mesh>
        ))
      ) : (
        <group ref={instanceGroupRef}>
          <instances.BodyPurflingTop name="Body_Purfling_Top" />
          <instances.BodyPurflingBottom name="Body_Purfling_Bottom" />
        </group>
      )}
    </group>
  )
}
