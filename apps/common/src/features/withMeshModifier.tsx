import React, { useRef, useEffect, ComponentType } from 'react'
import { Group, Material, Mesh } from 'three'

import { GLTFResult } from '../_generated/LuthGuitar'
import {
  applyGroupVisibility,
  applyMeshConfig,
  setMeshesToStandardWhiteMaterial,
} from './meshUtils'

// Define MeshConfig to map the nodes of the GLTFResult
export type MeshVisibilityConfig = Record<
  keyof GLTFResult['nodes'],
  { visible: boolean; material?: Material }
>

export type GroupVisibilityConfig = Record<string, boolean>

// Define a type for the combined configuration
export interface CombinedConfig {
  meshVisibilityConfig: MeshVisibilityConfig
  groupVisibilityConfig?: GroupVisibilityConfig
}

// Define the props type expected by the GLTFJSXComponent
export interface IWithMeshModifierProps {
  scale?: number
}
// HOC that wraps a component with mesh modification capabilities

export default function withMeshModifier<T extends IWithMeshModifierProps>(
  GLTFJSXComponent: ComponentType<T>,
  combinedConfig: CombinedConfig,
) {
  return (props: T) => {
    const groupRef = useRef<Group>(null)

    useEffect(() => {
      if (!groupRef.current) return

      // Apply group visibility and mesh configurations
      applyGroupVisibility(groupRef.current, combinedConfig.groupVisibilityConfig)
      applyMeshConfig(groupRef.current, combinedConfig.meshVisibilityConfig)

      setMeshesToStandardWhiteMaterial(groupRef.current)
    }, [combinedConfig])

    return (
      <group ref={groupRef}>
        <GLTFJSXComponent {...props} />
      </group>
    )
  }
}
