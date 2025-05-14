import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

export interface IBracesMeshesProps {
  configuration: IConfiguration
}

export default function BracesMeshes({ configuration }: IBracesMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        {/* <instances.BodyXBraceB name="Body_X_BraceB" />
        <instances.BodyXBraceC name="Body_X_BraceC" />
        <instances.BodyBraceD name="Body_BraceD" />
        <instances.BodyBraceE name="Body_BraceE" />
        <instances.BodyBraceFRight name="Body_BraceF_Right" />
        <instances.BodyBraceFLeft name="Body_BraceF_Left" />
        <instances.BodyBraceGRight name="Body_BraceG_Right" />
        <instances.BodyBraceGLeft name="Body_BraceG_Left" />
        <instances.BodyBraceHRight name="Body_BraceH_Right" />
        <instances.BodyBraceHLeft name="Body_BraceH_Left" />
        <instances.BodyLateralBraceA name="Body_Lateral_BraceA" /> */}
      </group>
    </group>
  )
}
