// import { useContext } from 'react'
// import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'

import LuthBinding, {
  Instances,
} from '../../_generated/LuthAcousticDreadnaught_25-4in_6str_Binding'
import { IConfiguration } from '../../models/configuration.model'
// import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IBindingMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BindingMeshes({ configuration, children }: IBindingMeshesProps) {
  // const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)
  console.log('BindingMeshes', instanceGeometry)

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
          >
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={1}>
        <Instances>
          <LuthBinding />
        </Instances>
      </group>

      {/* <group ref={instanceGroupRef} scale={0}>
        <instances.BodyBindingTop name="Body_Binding_Top" />
        <instances.BodyBindingBottom name="Body_Binding_Bottom" />
        <instances.BodyBindingTopVenetianCutaway name="Body_Binding_Top_Venetian_Cutaway" />
        <instances.BodyBindingBottomVenetianCutaway name="Body_Binding_Bottom_Venetian_Cutaway" />
        <instances.BodyBindingTopFlorentineCutaway name="Body_Binding_Top_Florentine_Cutaway" />
        <instances.BodyBindingBottomFlorentineCutaway name="Body_Binding_Bottom_Florentine_Cutaway" />
        <instances.BodyBindingTopArmBevel name="Body_Binding_Top_Arm_Bevel" />
        <instances.BodyBindingTopArmBevelVenetianCutaway name="Body_Binding_Top_Arm_Bevel_Venetian_Cutaway" />
        <instances.BodyBindingTopArmBevelFlorentineCutaway name="Body_Binding_Top_Arm_Bevel_Florentine_Cutaway" />
      </group> */}
      {children}
    </group>
  )
}
