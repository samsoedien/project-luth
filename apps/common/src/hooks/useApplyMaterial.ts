import { useEffect } from 'react'
import { Group, MeshStandardMaterial } from 'three'
import { PositionMesh } from '@react-three/drei'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export const useApplyMaterial = (
  instanceGroupRef: React.RefObject<Group>,
  instances: GLTFJSXInstances,
) => {
  useEffect(() => {
    if (!instanceGroupRef.current || !instances) return

    // Create a new white material
    const material = new MeshStandardMaterial({ color: 'white' })

    // Traverse the children of the instance group
    instanceGroupRef.current.traverse((child) => {
      if (child instanceof PositionMesh) {
        if (child.instance.current) {
          child.instance.current.material = material.clone()
          child.visible = false
        }
      }
    })

    // Cleanup: Dispose of the material if necessary
    return () => {
      material.dispose()
    }
  }, [instanceGroupRef, instances])
}
