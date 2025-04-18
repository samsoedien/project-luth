import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IFretsMeshesProps {
  configuration: IConfiguration
}

export default function FretsMeshes({ configuration }: IFretsMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null} visible={configuration.groupVisibility}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshPhongMaterial color={'grey'} />
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyFret name="Body_Fret1" />
        <instances.BodyFret1 name="Body_Fret2" />
        <instances.BodyFret2 name="Body_Fret3" />
        <instances.BodyFret3 name="Body_Fret4" />
        <instances.BodyFret4 name="Body_Fret5" />
        <instances.BodyFret5 name="Body_Fret6" />
        <instances.BodyFret6 name="Body_Fret7" />
        <instances.BodyFret7 name="Body_Fret8" />
        <instances.BodyFret8 name="Body_Fret9" />
        <instances.BodyFret9 name="Body_Fret10" />
        <instances.BodyFret10 name="Body_Fret11" />
        <instances.BodyFret11 name="Body_Fret12" />
        <instances.BodyFret12 name="Body_Fret13" />
        <instances.BodyFret13 name="Body_Fret14" />
        <instances.BodyFret14 name="Body_Fret15" />
        <instances.BodyFret15 name="Body_Fret16" />
        <instances.BodyFret16 name="Body_Fret17" />
        <instances.BodyFret17 name="Body_Fret18" />
        <instances.BodyFret18 name="Body_Fret19" />
        <instances.BodyFret19 name="Body_Fret20" />
        {/* <instances.BodyFret20 name="Body_Fret21" /> */}
      </group>
    </group>
  )
}
