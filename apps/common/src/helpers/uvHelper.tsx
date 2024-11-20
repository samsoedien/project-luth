import { useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { extend, useFrame } from '@react-three/fiber'
import Sides from '~/_generated/Sides'

// Define the shader material
const UVShaderMaterial = {
  uniforms: {},
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(vUv, 0.0, 1.0);
    }
  `,
}

extend({ ShaderMaterial })

function UVHelper() {
  const material = useMemo(() => new ShaderMaterial(UVShaderMaterial), [])

  return (
    <mesh material={material}>
      <Sides />
    </mesh>
  )
}

export default UVHelper
