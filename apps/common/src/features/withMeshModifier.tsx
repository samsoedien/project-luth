import React, { useRef, useEffect, ComponentType } from 'react'
import { Group, Material, Mesh } from 'three'

import { GLTFResult } from '../_generated/LuthGuitar'

// Define MeshConfig to map the nodes of the GLTFResult
export type MeshConfig = Record<
  keyof GLTFResult['nodes'],
  { visible: boolean; material?: Material }
>

// Define the props type expected by the GLTFJSXComponent
export interface IWithMeshModifierProps {
  scale?: number
}
// HOC that wraps a component with mesh modification capabilities
export default function withMeshModifier<T extends IWithMeshModifierProps>(
  GLTFJSXComponent: ComponentType<T>,
  meshConfig: MeshConfig,
) {
  // Directly return the modified component
  return (props: T) => {
    console.log(props.scale)
    const groupRef = useRef<Group>(null)

    useEffect(() => {
      if (!groupRef.current) return

      // Traverse the group to find and modify meshes
      groupRef.current.traverse((child) => {
        if ((child as Mesh).isMesh && meshConfig[child.name as keyof MeshConfig]) {
          const config = meshConfig[child.name as keyof MeshConfig]
          if (config.visible !== undefined) child.visible = config.visible
          if (config.material !== undefined) (child as Mesh).material = config.material
        }
      })
    }, [meshConfig])

    return (
      <group ref={groupRef}>
        <GLTFJSXComponent {...props} />
      </group>
    )
  }
}
