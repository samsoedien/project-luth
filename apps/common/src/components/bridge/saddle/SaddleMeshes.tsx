import { useContext } from 'react'
import { IConfiguration } from '../../../models/configuration.model'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import LuthSaddle, { Instances } from '~/_generated/LuthSaddle'

export interface ISaddleMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function SaddleMeshes({ meshConfig }: ISaddleMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="black" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthSaddle />
        </Instances>
      </group>
    </group>
  )
}
