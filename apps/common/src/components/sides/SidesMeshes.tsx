import { memo, useContext } from 'react'
import LuthSides, {
  // context as GLTFJSXContext,
  // LuthSidesInstances,
  Instances,
} from '~/_generated/LuthSides'

// import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

// const [Instances, LuthSidesTest] = createInstances()

export interface ISidesMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}
export default function SidesMeshes({ configuration, children }: ISidesMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)
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
            <meshNormalMaterial />
            {/* {child.userData.annotations && (
              <Html occlude>{`Thickness: ${child.userData.annotations.thickness}`}</Html>
            )} */}
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances frustumCulled={true}>
          <LuthSides />
        </Instances>
      </group>
      {children}
    </group>
  )
}
