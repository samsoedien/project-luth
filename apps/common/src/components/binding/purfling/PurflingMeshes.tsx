import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

export interface IPurflingMeshesProps {
  configuration: IConfiguration
}

export default function PurflingMeshes({ configuration }: IPurflingMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="black" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyPurflingTop name="Body_Purfling_Top" />
        <instances.BodyPurflingBottom name="Body_Purfling_Bottom" />
        <instances.BodyPurflingTopVenetianCutaway name="Body_Purfling_Top_Venetian_Cutaway" />
        {/* <instances.BodyPurflingBottomVenetianCutaway name="Body_Purfling_Bottom_Venetian_Cutaway" /> */}
        <instances.BodyPurflingTopFlorentineCutaway name="Body_Purfling_Top_Florentine_Cutaway" />
        <instances.BodyPurflingBottomFlorentineCutaway name="Body_Purfling_Bottom_Florentine_Cutaway" />
        <instances.BodyPurflingTopArmBevel name="Body_Purfling_Top_Arm_Bevel" />
        <instances.BodyPurflingTopArmBevelVenetianCutaway name="Body_Purfling_Top_Arm_Bevel_Venetian_Cutaway" />
        <instances.BodyPurflingTopArmBevelFlorentineCutaway name="Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway" />
      </group>
    </group>
  )
}
