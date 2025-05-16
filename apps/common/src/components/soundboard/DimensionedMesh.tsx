import { useEffect, useRef, useState } from 'react'
import { Box3, Mesh, Vector3, BufferGeometry } from 'three'
import { Helper, Html } from '@react-three/drei'
import { BoxHelper } from 'three'

interface DimensionedMeshProps {
  geometry: BufferGeometry
  name: string
}

export function DimensionedMesh({ geometry, name }: DimensionedMeshProps) {
  const meshRef = useRef<Mesh>(null)
  const [dimensions, setDimensions] = useState<Vector3 | null>(null)
  const [center, setCenter] = useState<Vector3 | null>(null)

  useEffect(() => {
    if (meshRef.current) {
      const box = new Box3().setFromObject(meshRef.current)
      const size = new Vector3()
      const center = new Vector3()
      box.getSize(size)
      box.getCenter(center)
      setDimensions(size)
      setCenter(center)
    }
  }, [])

  return (
    <mesh name={name} geometry={geometry} castShadow receiveShadow ref={meshRef}>
      <meshNormalMaterial />
      <Helper type={BoxHelper} args={['red']} />
      {center && dimensions && (
        <Html position={center.toArray()} center distanceFactor={10}>
          <div
            style={{
              transform: 'scale(0.3)',
              transformOrigin: 'top center',
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '1px 2px',
              borderRadius: '2px',
              fontSize: '8px',
              whiteSpace: 'nowrap',
              color: '#000',
              boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
            }}
          >
            {`W: ${(dimensions.x * 1000).toFixed(2)}mm, H: ${(dimensions.y * 1000).toFixed(2)}mm, D: ${(dimensions.z * 1000).toFixed(2)}mm`}
          </div>
        </Html>
      )}
    </mesh>
  )
}
