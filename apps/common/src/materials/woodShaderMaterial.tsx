import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

export const WoodShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0x704214), // Wood color
  },
  // Vertex Shader
  `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader (for generating wood grain procedurally)
  `
    uniform float uTime;
    uniform vec3 uColor;
    
    // Simple noise function to create wood grain effect
    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      float grain = noise(uv * uTime);
      gl_FragColor = vec4(uColor * grain, 1.0);
    }
  `,
)

extend({ WoodShaderMaterial })

// Usage in React Three Fiber
