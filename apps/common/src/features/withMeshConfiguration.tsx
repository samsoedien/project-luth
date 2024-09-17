import React, { useRef, useEffect, ComponentType } from 'react'
import { Group, Mesh } from 'three'
import { IComponentData, IConfiguration } from '../store/store'
import {
  applyMeshVisibility,
  applyMeshMaterial,
  hasUniqueComponentNames,
  applyGroupVisibility,
} from './meshUtils'
import { GLTFResult } from '~/_generated/LuthAcousticDreadnaught'

interface IWithMeshModifierProps {
  // No configuration prop needed here
  position: [number, number, number]
}

const withMeshConfiguration = <P extends IWithMeshModifierProps>(
  GLTFJSXComponent: ComponentType<P>,
  configuration: IConfiguration, // Configuration passed as a second argument
) => {
  if (!hasUniqueComponentNames(configuration.components)) {
    throw new Error('Component names must be unique')
  }
  return (props: P) => {
    const groupRef = useRef<Group>(null)

    useEffect(() => {
      if (!groupRef.current) return

      // Use the utility function to apply mesh visibility

      applyMeshVisibility(groupRef.current, configuration)
      applyMeshMaterial(groupRef.current, configuration)
      applyGroupVisibility(groupRef.current, configuration)
    }, [configuration])

    return (
      <group ref={groupRef}>
        <GLTFJSXComponent {...(props as P)} />
      </group>
    )
  }
}

export default withMeshConfiguration
