import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IBindingMeshesProps {
  configuration?: IConfiguration
  children: React.ReactNode
}

export default function BindingMeshes({ configuration, children }: IBindingMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration?.name} dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="white" />
          </mesh>
        ))
      ) : (
        <group ref={instanceGroupRef}>
          <instances.BodyBindingTop name="Body_Binding_Top" />
          <instances.BodyBindingBottom name="Body_Binding_Bottom" />
          {/* <instances.BodyBindingTopVenetianCutaway name="Body_Binding_Top_Venetian_Cutaway" />
          <instances.BodyBindingBottomVenetianCutaway name="Body_Binding_Bottom_Venetian_Cutaway" />
          <instances.BodyBindingTopFlorentineCutaway name="Body_Binding_Top_Florentine_Cutaway" />
          <instances.BodyBindingBottomFlorentineCutaway name="Body_Binding_Bottom_Florentine_Cutaway" /> */}
        </group>
      )}
      {children}
    </group>
  )
}
