import { useEffect, useState } from 'react'
import * as THREE from 'three'

const useNormalizeUV = (mesh: THREE.Mesh) => {
  // Explicitly define the state type as either BufferGeometry or null
  const [normalizedGeometry, setNormalizedGeometry] = useState<THREE.BufferGeometry | null>(null)

  useEffect(() => {
    if (!mesh.geometry) return

    // Clone the geometry to avoid modifying the original
    const geomClone = mesh.geometry.clone()

    // Compute the bounding box of the geometry
    geomClone.computeBoundingBox()
    const boundingBox = geomClone.boundingBox

    if (!boundingBox) return // Ensure the bounding box is calculated

    // Get the size of the bounding box
    const width = boundingBox.max.x - boundingBox.min.x
    const height = boundingBox.max.y - boundingBox.min.y

    // Ensure the geometry has UVs, create them if they don't exist
    if (!geomClone.attributes.uv) {
      const uvArray = new Float32Array(geomClone.attributes.position.count * 2)
      geomClone.setAttribute('uv', new THREE.BufferAttribute(uvArray, 2))
    }

    const positionAttribute = geomClone.attributes.position
    const uvAttribute = geomClone.attributes.uv

    // Normalize UVs based on bounding box dimensions
    for (let i = 0; i < positionAttribute.count; i++) {
      const u = (positionAttribute.getX(i) - boundingBox.min.x) / width
      const v = (positionAttribute.getY(i) - boundingBox.min.y) / height

      uvAttribute.setXY(i, u, v)
    }

    // Mark the UV attribute as needing an update
    uvAttribute.needsUpdate = true

    // Set the normalized geometry
    setNormalizedGeometry(geomClone)
  }, [mesh])

  return normalizedGeometry
}

export default useNormalizeUV
