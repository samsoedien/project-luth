import LuthHeelTailBlocks, {
  // context as GLTFJSXContext,
  // LuthHeelTailBlocksInstances as Instances,
  Instances,
} from '../../../_generated/LuthHeelTailBlocks'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

export interface IHeelTailBlockMeshesProps {
  configuration: IConfiguration
}

export default function HeelTailBlockMeshes({ configuration }: IHeelTailBlockMeshesProps) {
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
          </mesh>
        ))}

      <group ref={instanceGroupRef} visible={false}>
        <Instances frustumCulled={false}>
          <LuthHeelTailBlocks />
        </Instances>
      </group>
    </group>
  )
}
