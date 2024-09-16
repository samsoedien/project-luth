import { Group, Mesh, MeshStandardMaterial, Material } from 'three'
import { IComponentData, IConfiguration } from '../store/store'
import { GLTFResult } from '../_generated/LuthGuitar'

// Function to apply visibility to meshes based on configuration
export const applyMeshVisibility = (group: Group, configuration: IConfiguration) => {
  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh
      const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

      // Determine if the mesh should be visible based on the configuration
      const component = configuration.components.find((comp) => comp.meshes.includes(meshName))

      mesh.visible = !!component
    }
  })
}

// Function to apply a specified material or fallback to white material to all meshes
export const applyMeshMaterial = (group: Group, configuration: IConfiguration) => {
  const whiteMaterial = new MeshStandardMaterial({ color: 'white' })

  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh
      const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

      // Find the component to get the material
      const component = configuration.components.find((comp) => comp.meshes.includes(meshName))

      // Apply the specified material if available, else fallback to white material
      const material = component?.material ?? whiteMaterial
      mesh.material = material
    }
  })
}

export function hasUniqueComponentNames(components: IComponentData[]): boolean {
  const names = components.map((c) => c.name)
  return new Set(names).size === names.length
}
