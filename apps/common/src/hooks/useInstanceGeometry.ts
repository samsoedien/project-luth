import { useEffect, useRef, useState } from 'react'
import { BufferGeometry, Group } from 'three'
import { PositionMesh } from '@react-three/drei'
import { IConfiguration } from '~/store/store'

export const useInstanceGeometry = (
  configuration?: IConfiguration,
): { instanceGeometry: PositionMesh[]; instanceGroupRef: React.RefObject<Group> } => {
  const instanceGroupRef = useRef<Group>(null)
  const [instanceGeometry, setInstanceGeometry] = useState<PositionMesh[]>([])

  useEffect(() => {
    if (!instanceGroupRef.current || !configuration?.meshes) return

    const geometries: PositionMesh[] = []

    // Traverse the children of the group and collect geometries
    instanceGroupRef.current.traverse((child) => {
      if ('geometry' in child && child.geometry instanceof BufferGeometry) {
        geometries.push(child as PositionMesh)
      }
    })

    // Filter geometries based on the configuration
    const geometriesFiltered = geometries.filter((child) =>
      configuration.meshes.includes(child.name),
    )

    setInstanceGeometry(geometriesFiltered)
  }, [configuration])

  return { instanceGeometry, instanceGroupRef }
}
