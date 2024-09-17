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
export function applyMeshMaterial(group: Group, configuration: IConfiguration): void {
  const whiteMaterial = new MeshStandardMaterial({ color: 'white' })

  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh
      const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

      const findMaterial = (
        components: IComponentData[],
        meshName: keyof GLTFResult['nodes'],
      ): Material => {
        for (const component of components) {
          if (component.meshes.includes(meshName)) {
            return component.material ?? whiteMaterial
          }
          if (component.components) {
            const material = findMaterial(component.components, meshName)
            if (material) return material
          }
        }
        return whiteMaterial // Default to whiteMaterial if no matching material is found
      }

      const material = findMaterial(configuration.components, meshName)

      mesh.material = material
    }
  })
}

// Function to apply visibility to specified meshes based on groupVisibility
export function applyGroupVisibility(group: Group, configuration: IConfiguration): void {
  // Function to determine visibility based on groupVisibility
  const findGroupVisibility = (
    components: IComponentData[],
    meshName: keyof GLTFResult['nodes'],
  ): boolean | undefined => {
    for (const component of components) {
      if (component.meshes.includes(meshName)) {
        return component.groupVisibility ?? true // Default to true if not specified
      }
      if (component.components) {
        const visibility = findGroupVisibility(component.components, meshName)
        if (visibility !== undefined) return visibility
      }
    }
    return undefined // Return undefined if no matching component is found
  }

  // Traverse the group and apply visibility
  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh
      const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

      // Find visibility based on the configuration
      const visibility = findGroupVisibility(configuration.components, meshName)

      // Only set visibility if the mesh is specified in the components array
      if (visibility !== undefined) {
        mesh.visible = visibility
      }
    }
  })
}
// // Function to apply a specified material or fallback to white material to all meshes
// export const applyMeshMaterial = (group: Group, configuration: IConfiguration) => {
//   const whiteMaterial = new MeshStandardMaterial({ color: 'white' })

//   group.traverse((child) => {
//     if ((child as Mesh).isMesh) {
//       const mesh = child as Mesh
//       const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

//       // Find the component to get the material
//       const component = configuration.components.find((comp) => comp.meshes.includes(meshName))

//       // Apply the specified material if available, else fallback to white material
//       const material = component?.material ?? whiteMaterial
//       mesh.material = material
//     }
//   })
// }

export function hasUniqueComponentNames(components: IComponentData[]): boolean {
  const names = components.map((c) => c.name)
  return new Set(names).size === names.length
}
