import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'
import { Html } from '@react-three/drei'

export interface ISidesMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function SidesMeshes({ configuration, children }: ISidesMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh
            key={child.uuid}
            name={child.name}
            geometry={child.geometry}
            castShadow
            receiveShadow
            onClick={(e) => console.log('click', e)}
          >
            <meshStandardMaterial color={'white'} />
            {child.userData.annotations && (
              <Html occlude>{`Thickness: ${child.userData.annotations.thickness}`}</Html>
            )}
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodySides name="Body_Sides" />
        <instances.BodySidesVenetianCutaway
          name="Body_Sides_Venetian_Cutaway"
          userData={{ annotations: { thickness: 3 } }}
        />
        <instances.BodySidesFlorentineCutaway name="Body_Sides_Florentine_Cutaway" />
        <instances.BodySidesScallopedCutaway name="Body_Sides_Scalloped_Cutaway_(1)" />
        <instances.BodySidesArmBevel name="Body_Sides_Arm_Bevel" />
        <instances.BodySidesArmBevelVenetianCutaway name="Body_Sides_Arm_Bevel_Venetian_Cutaway" />
        <instances.BodySidesArmBevelFlorentineCutaway name="Body_Sides_Arm_Bevel_Florentine_Cutaway" />
        <instances.BodySidesArmBevelScallopedCutaway name="Body_Sides_Arm_Bevel_Scalloped_Cutaway" />
      </group>

      {children}
    </group>
  )
}
