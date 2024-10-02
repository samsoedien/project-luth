import { useContext, useRef, useState, useEffect } from 'react'
import { BufferGeometry, Group } from 'three'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { PositionMesh } from '@react-three/drei'
import { IConfiguration } from '~/models/configuration.model'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IEndGraftMeshesProps {
  configuration?: IConfiguration
}

export default function EndGraftMeshes({ configuration }: IEndGraftMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
            {/* <Wireframe /> */}
          </mesh>
        ))
      ) : (
        <group ref={instanceGroupRef}>
          <instances.BodyEndGraftWedge name="Body_End_Graft_Wedge" />
        </group>
      )}
    </group>
  )
}
