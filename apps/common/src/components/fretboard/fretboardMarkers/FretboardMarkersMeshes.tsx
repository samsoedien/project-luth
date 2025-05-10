import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IFretboardMarkersMeshesProps {
  configuration: IConfiguration
}

export default function FretboardMarkersMeshes({ configuration }: IFretboardMarkersMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null} visible={configuration.groupVisibility}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
            {/* <meshStandardMaterial color={'white'} /> */}
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyFretMarkerFret name="Body_Fret_Marker_Fret17" />
        <instances.BodyFretMarkerFret2 name="Body_Fret_Marker_Fret21" />
        <instances.BodyFretMarkerFret3 name="Body_Fret_Marker_Fret7" />
        <instances.BodyFretMarkerFret4 name="Body_Fret_Marker_Fret12-2" />
        <instances.BodyFretMarkerFret5 name="Body_Fret_Marker_Fret3" />
        <instances.BodyFretMarkerFret6 name="Body_Fret_Marker_Fret5" />
        <instances.BodyFretMarkerFret7 name="Body_Fret_Marker_Fret15" />
        <instances.BodyFretMarkerFret8 name="Body_Fret_Marker_Fret12-1" />
        {/* <instances.BodyFretMarkerFret9 name="Body_Fret_Marker_Fret9" /> */}
      </group>
    </group>
  )
}
