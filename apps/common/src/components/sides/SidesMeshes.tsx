import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated//LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'
import { Html, useTexture } from '@react-three/drei'

export interface ISidesMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function SidesMeshes({ configuration, children }: ISidesMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const koaBaseColorMap = useTexture('koa.jpg')

  const Wood0244BaseColor = useTexture('Wood_024_basecolor.jpg')
  const Wood0244Height = useTexture('Wood_024_height.jpg')
  const Wood024Normal = useTexture('Wood_024_normal.jpg')
  const Wood024Roughness = useTexture('Wood_024_roughness.jpg')
  const Wood024AmbientOcclusion = useTexture('Wood_024_ambientOcclusion.jpg')

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
            onClick={(e) => console.log('click', e)}
          >
            {/* <meshNormalMaterial /> */}
            <meshStandardMaterial
              map={Wood0244BaseColor}
              displacementMap={Wood0244Height}
              roughnessMap={Wood024Roughness}
              normalMap={Wood024Normal}
              aoMap={Wood024AmbientOcclusion}
            />
            {child.userData.annotations && (
              <Html occlude>{`Thickness: ${child.userData.annotations.thickness}`}</Html>
            )}
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        {/* <instances.BodySides name="Body_Sides" /> */}
        <instances.BodySidesVenetianCutaway
          name="Body_Sides_Venetian_Cutaway"
          userData={{ annotations: { thickness: 3 } }}
        />
        <instances.BodySidesFlorentineCutaway name="Body_Sides_Florentine_Cutaway" />
        <instances.BodySidesScallopedCutaway name="Body_Sides_Scalloped_Cutaway" />
        <instances.BodySidesArmBevel name="Body_Sides_Arm_Bevel" />
        <instances.BodySidesArmBevelVenetianCutaway name="Body_Sides_Arm_Bevel_Venetian_Cutaway" />
        <instances.BodySidesArmBevelFlorentineCutaway name="Body_Sides_Arm_Bevel_Florentine_Cutaway" />
        <instances.BodySidesArmBevelScallopedCutaway name="Body_Sides_Arm_Bevel_Scalloped_Cutaway" />
      </group>

      {children}
    </group>
  )
}
