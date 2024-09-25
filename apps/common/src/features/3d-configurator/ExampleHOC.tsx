import { useEffect, ComponentType } from 'react'

import { Instances } from '~/_generated/GLTFJSXComponent'
import { useGraph, useThree } from '@react-three/fiber'
import { IConfiguration } from '~/store/store'

interface IWithMeshModifierProps {
  position: [number, number, number]
}

const withMeshConfiguration = <P extends IWithMeshModifierProps>(
  GLTFJSXComponent: ComponentType<P>,
  configuration: IConfiguration,
) => {
  return (props: P) => {
    const { scene } = useThree()
    const { nodes } = useGraph(scene)

    useEffect(() => {
      console.log('nodes', nodes)
    }, [configuration])

    if (!nodes) return null

    return (
      <group>
        <Instances visible={false}>
          <GLTFJSXComponent {...props}></GLTFJSXComponent>
        </Instances>

        <Component1 nodes={nodes} />
        <Component2 nodes={nodes} />

        {/* <group name="Component1">
          <instance.ParentBody1 name="ParentBody1" scale={0.001} />
          ...
        </group> */}
      </group>
    )
  }
}

export default withMeshConfiguration

export const Component1 = ({ nodes }) => {
  const optionsComponent1 = useConfigurationStore((state) => state.options)
  return (
    <group name="Component1">
      <mesh geometry={nodes.ParentBody1.geometry}>
        <meshNormalMaterial />
        <Component3 nodes={nodes} />
      </mesh>
    </group>
  )
}

export const Component2 = ({ nodes }) => {
  const optionsComponen2 = useConfigurationStore((state) => state.options)
  return (
    <group name="Component2">
      <mesh geometry={nodes.ParentBody2.geometry}>
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}

export const Component3 = ({ nodes }) => {
  const optionsComponent3 = useConfigurationStore((state) => state.options)
  return (
    <group name="Component3">
      <mesh geometry={nodes.ChildBody3.geometry}>
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}
