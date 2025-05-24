import { useEffect, useRef, useState } from 'react'
import { BufferGeometry, Group } from 'three'
import { PositionMesh } from '@react-three/drei'
import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'
import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'

export const useInstanceGeometry = (
  meshConfig: IMeshConfiguration<ELuthComponent>,
): {
  instanceGeometry: PositionMesh[]
  instanceGroupRef: React.RefObject<Group | null>
} => {
  const instanceGroupRef = useRef<Group>(null)
  const [instanceGeometry, setInstanceGeometry] = useState<PositionMesh[]>([])

  useEffect(() => {
    if (!instanceGroupRef.current) return

    const geometries: PositionMesh[] = []
    instanceGroupRef.current.traverse((child) => {
      if ('geometry' in child && child.geometry instanceof BufferGeometry) {
        geometries.push(child as PositionMesh)
      }
    })

    setInstanceGeometry(
      geometries.filter((child) =>
        meshConfig.meshes.includes(child.name as keyof LuthGLTFResultCombined['nodes']),
      ),
    )
  }, [meshConfig.meshes])

  return { instanceGeometry, instanceGroupRef }
}
