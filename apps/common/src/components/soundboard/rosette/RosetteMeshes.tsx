import { Helper, PositionMesh, useTexture } from '@react-three/drei'
import { useContext, useRef, useState, useEffect } from 'react'
import { TextureLoader, RepeatWrapping, BoxHelper } from 'three'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useScaledTexture, useSharedTexture } from '~/hooks/useScaledTexture'

export interface IRosetteMeshesProps {
  configuration?: IConfiguration
}

export default function RosetteMeshes({ configuration }: IRosetteMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const soundboardTexture = useTexture('sitka-spruce.jpg')

  return (
    <group dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh
            key={child.uuid}
            name={child.name}
            geometry={child.geometry}
            // castShadow
            // receiveShadow
          >
            {child.name === 'Body_Rosette' ||
            child.name === 'Body_Rosette_(1)' ||
            child.name === 'Body_Rosette_(3)' ? (
              <meshStandardMaterial color="black" />
            ) : (
              <meshStandardMaterial map={soundboardTexture} />
            )}
            <Helper type={BoxHelper} args={['royalblue']} />
          </mesh>
        ))
      ) : (
        <group ref={instanceGroupRef}>
          <instances.BodyRosette name="Body_Rosette" />
          <instances.BodyRosette1 name="Body_Rosette_(1)" />
          <instances.BodyRosette2 name="Body_Rosette_(2)" />
          <instances.BodyRosette3 name="Body_Rosette_(3)" />
          <instances.BodyRosette4 name="Body_Rosette_(4)" />
        </group>
      )}
    </group>
  )
}
