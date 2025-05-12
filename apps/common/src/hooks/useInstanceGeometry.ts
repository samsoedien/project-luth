import { useEffect, useRef, useState } from 'react'
import { BufferGeometry, Group } from 'three'
import { PositionMesh } from '@react-three/drei'
import { GLTFResult } from '~/_generated/LuthAcoustic'
import { IConfiguration } from '~/models/configuration.model'
import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'

export const useInstanceGeometry = (
  configuration: IConfiguration,
): {
  instanceGeometry: PositionMesh[]
  instanceGroupRef: React.RefObject<Group | null>
} => {
  const instanceGroupRef = useRef<Group>(null)
  const [instanceGeometry, setInstanceGeometry] = useState<PositionMesh[]>([])

  console.log('configuration', configuration)

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
        configuration.meshes.includes(child.name as keyof LuthGLTFResultCombined['nodes']),
      ),
    )
  }, [configuration.meshes])

  return { instanceGeometry, instanceGroupRef }
}
