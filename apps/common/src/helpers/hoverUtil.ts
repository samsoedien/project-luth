import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Raycaster, Vector2, Object3D, Mesh } from 'three'
import { useConfigurationStore } from '~/store/store'

function collectVisibleMeshes(object: Object3D): Mesh[] {
  const meshes: Mesh[] = []
  object.traverse((child) => {
    if (child instanceof Mesh && child.visible) {
      let parent = child.parent
      let isVisible = true
      while (parent) {
        if (!parent.visible) {
          isVisible = false
          break
        }
        parent = parent.parent
      }
      if (isVisible) meshes.push(child)
    }
  })
  return meshes
}

export function useHoverLogger(root: React.RefObject<Object3D>) {
  const { camera, gl } = useThree()
  const setContext = useConfigurationStore((state) => state.setContext)
  const mouse = useRef(new Vector2())
  const raycaster = useRef(new Raycaster())

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1

      if (!root.current) return

      const visibleMeshes = collectVisibleMeshes(root.current)
      raycaster.current.setFromCamera(mouse.current, camera)
      const intersects = raycaster.current.intersectObjects(visibleMeshes, true)

      if (intersects.length > 0) {
        const mesh = intersects[0].object as Mesh
        const meshName = mesh.name || mesh.uuid
        setContext({ hoveredMesh: meshName })
      } else {
        setContext({ hoveredMesh: '' })
      }
    }

    const dom = gl.domElement
    dom.addEventListener('pointermove', handlePointerMove)
    return () => dom.removeEventListener('pointermove', handlePointerMove)
  }, [camera, gl, root, setContext])
}
