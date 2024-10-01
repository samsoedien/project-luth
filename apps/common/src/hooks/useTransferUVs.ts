import { useEffect } from 'react'
import { Mesh, BufferGeometry, Float32BufferAttribute } from 'three'

export function useTransferUVs(sourceMesh: Mesh | null, targetMesh: Mesh | null) {
  useEffect(() => {
    if (!sourceMesh || !targetMesh) {
      console.warn('Source or target mesh not provided')
      return
    }

    // Ensure both meshes have geometries
    const sourceGeometry = sourceMesh.geometry as BufferGeometry
    const targetGeometry = targetMesh.geometry as BufferGeometry

    if (!sourceGeometry || !targetGeometry) {
      console.warn('Source or target mesh has no geometry')
      return
    }

    // Extract UVs from the source mesh's geometry
    const sourceUVs = sourceGeometry.getAttribute('uv')
    if (!sourceUVs) {
      console.warn('Source mesh does not have UVs')
      return
    }

    // Apply the UVs to the target mesh's geometry
    targetGeometry.setAttribute('uv', new Float32BufferAttribute(sourceUVs.array, 2))

    // Notify three.js that the geometry has changed
    targetGeometry.attributes.uv.needsUpdate = true
    targetGeometry.needsUpdate = true
  }, [sourceMesh, targetMesh])
}
