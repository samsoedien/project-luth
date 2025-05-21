import { memo, useRef } from 'react'
import LuthSoundboard, { Instances } from '../../_generated/LuthSoundboard'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { Helper, useTexture } from '@react-three/drei'
import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'

import { BoxHelper, Mesh } from 'three'
import { DimensionedMesh } from './DimensionedMesh'
import { useConfigurationStore } from '~/store/store'

export interface ISoundboardMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function SoundboardMeshes({ meshConfig, children }: ISoundboardMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  const BaseColorMap = useTexture('Body_Sides_Venetian_Cutaway_Batch001_PBR_Diffuse.png')
  const NormalMap = useTexture('Body_Sides_Venetian_Cutaway_Batch001_PBR_Normal.png')
  const ORMMap = useTexture('Body_Sides_Venetian_Cutaway_Batch001_PBR_ORM_Textures.png')

  const componentVisbility = useConfigurationStore((state) => state.componentVisibility)
  const isVisible = componentVisbility.includes(meshConfig.name)

  return (
    <group name={meshConfig.name} dispose={null} visible={isVisible}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => {
          return (
            <DimensionedMesh key={child.uuid} name={child.name} geometry={child.geometry} />

            // <mesh
            //   key={child.uuid}
            //   name={child.name}
            //   geometry={child.geometry}
            //   castShadow
            //   receiveShadow
            //   ref={meshRef}
            // >
            //   <meshNormalMaterial />
            //   {/* <meshStandardMaterial
            //     color="white"
            //     // map={BaseColorMap}
            //     // normalMap={NormalMap}
            //     // displacementMap={spruceHeightMap}
            //     // roughnessMap={ORMMap}
            //     // metalnessMap={ORMMap}
            //     // aoMap={ORMMap}
            //   /> */}
            //   <Helper type={BoxHelper} args={['red']} />
            // </mesh>
          )
        })}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthSoundboard />
        </Instances>
      </group>
      {children}
    </group>
  )
}
