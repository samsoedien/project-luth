import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface IBackStripMeshesProps {
  configuration?: IConfiguration
  children?: React.ReactNode
}

export default function BackStripMeshes({ configuration, children }: IBackStripMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshBasicMaterial color="white" />
          </mesh>
        ))
      ) : (
        <group ref={instanceGroupRef}>
          <instances.BodyBackCenterStrip name="Body_Back_Center_Strip" />
          <instances.BodyBackDoubleStripLeft name="Body_Back_Double_Strip_Left" />
          <instances.BodyBackDoubleStripRight name="Body_Back_Double_Strip_Right_(1)" />
        </group>
      )}
      {children}
    </group>
  )
}
