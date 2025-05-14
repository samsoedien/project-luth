import { GradientTexture, GradientType } from '@react-three/drei'

import LuthRosette, { Instances as LuthRosetteInstances } from '../../../_generated/LuthRosette'

import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'
import { memo } from 'react'

export interface IRosetteMeshesProps {
  configuration: IConfiguration
}

export default function RosetteMeshes({ configuration }: IRosetteMeshesProps) {
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
            <GradientTexture
              stops={[0, 0.5, 1]} // As many stops as you want
              colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
              size={1024} // Size (height) is optional, default = 1024
              width={1024} // Width of the canvas producing the texture, default = 16
              type={GradientType.Radial} // The type of the gradient, default = GradientType.Linear
              innerCircleRadius={0} // Optional, the radius of the inner circle of the gradient, default = 0
              outerCircleRadius={'auto'} // Optional, the radius of the outer circle of the gradient, default = auto
            />
          </mesh>
        ))}

      <group ref={instanceGroupRef} visible={false}>
        <LuthRosetteInstances>
          <LuthRosette />
        </LuthRosetteInstances>
      </group>
    </group>
  )
}
