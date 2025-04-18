import { useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping } from 'three'

export function useScaledTexture(
  texturePath: string,
  meshSizes: { width: number; height: number }[],
) {
  const texture = useTexture(texturePath)

  useEffect(() => {
    // Set texture wrapping
    texture.wrapS = texture.wrapT = RepeatWrapping

    // Calculate the maximum dimensions
    const maxWidth = Math.max(...meshSizes.map((mesh) => mesh.width))
    const maxHeight = Math.max(...meshSizes.map((mesh) => mesh.height))

    // Calculate scaling factors based on the maximum dimensions
    const scaleX = maxWidth / Math.max(...meshSizes.map((mesh) => mesh.width))
    const scaleY = maxHeight / Math.max(...meshSizes.map((mesh) => mesh.height))

    // Set texture repeat to scale based on the maximum dimensions
    texture.repeat.set(scaleX, scaleY) // Adjust repeat scaling

    // Mark texture for update
    texture.needsUpdate = true
  }, [texture, meshSizes]) // Dependencies

  return texture
}
