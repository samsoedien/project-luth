import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

import LuthBack, { Instances } from '../../_generated/LuthBack'

export interface IBackMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function BackMeshes({ meshConfig, children }: IBackMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  // const koaBaseColorMap = useTexture('koa.jpg')
  // const koaBaseColorMap = useTexture('sitka-spruce.jpg')

  return (
    <group name={meshConfig.name} dispose={null}>
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
