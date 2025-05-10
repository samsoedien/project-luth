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
  // const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group dispose={null}>
      {/* {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))
      ) : ( */}
      <group ref={instanceGroupRef}>
        <Instances frustumCulled={false}>
          <LuthHeelTailBlocks />
        </Instances>
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
        </mesh> */}
        {/* <instances.BodyHeelBlock name="Body_Heel_Block" /> */}
        {/* <instances.BodyTailBlock name="Body_Tail_Block" /> */}
      </group>
    </group>
  )
}
