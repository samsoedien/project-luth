import { useContext, useRef } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTexture } from '@react-three/drei'
import { MeshNormalMaterial } from 'three'

import LuthBack, {
  // context as GLTFJSXContext,
  // LuthSoundboardInstances as Instances,
  Instances,
} from '../../_generated/LuthBack'

export interface IBackMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BackMeshes({ configuration, children }: IBackMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  // const koaBaseColorMap = useTexture('koa.jpg')
  // const koaBaseColorMap = useTexture('sitka-spruce.jpg')

  return (
    <group name={configuration.name} dispose={null} visible={configuration.groupVisibility}>
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
            {/* <meshStandardMaterial map={koaBaseColorMap} /> */}
            <meshNormalMaterial />
          </mesh>
        ))}
      {/* {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) =>
          child.userData.middlePart ? (
            <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
              <meshNormalMaterial />
            </mesh>
          ) : (
            <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
              <meshStandardMaterial map={koaBaseColorMap} />
            </mesh>
          ),
        )} */}
      <group ref={instanceGroupRef} visible={false}>
        <Instances frustumCulled={false}>
          <LuthBack />
        </Instances>
      </group>
      {children}
    </group>
  )
}
