import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

// import LuthSaddle, { Instances } from '../../_generated/LuthSaddle'

export interface BridgePinsMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BridgePinsMeshes({ configuration, children }: BridgePinsMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  // const bridgeTexture = useTexture('walnut.jpg')

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="white" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        {/* <Instances>
          <LuthSaddle />
        </Instances> */}
      </group>
      {children}
    </group>
  )
}
