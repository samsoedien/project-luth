import { Group, Mesh, MeshStandardMaterial, Material } from 'three'
import { IComponentData, IConfiguration } from '../store/store'
import { GLTFResult } from '../_generated/LuthAcousticDreadnaught'

// Function to apply visibility to meshes based on configuration
// export const applyMeshVisibility = (group: Group, configuration: IConfiguration) => {
//   group.traverse((child) => {
//     if ((child as Mesh).isMesh) {
//       const mesh = child as Mesh
//       const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

//       // Determine if the mesh should be visible based on the configuration
//       const component = configuration.components.find((comp) => comp.meshes.includes(meshName))

//       console.log(meshName, mesh)

//       mesh.visible = !!component
//     }
//   })
// }

/**
 * Applies mesh visibility based on the provided configuration.
 */
export function applyMeshVisibility(group: Group, configuration: IConfiguration): void {
  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const meshName = child.name as keyof GLTFResult['nodes']

      const findVisibility = (components: IComponentData[]): boolean => {
        return components.some(
          (component) =>
            component.meshes.includes(meshName) ||
            (component.components && findVisibility(component.components)),
        )
      }

      child.visible = findVisibility(configuration.components)
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
