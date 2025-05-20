import { Group, Mesh, MeshStandardMaterial, Material, TextureLoader } from 'three'

import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'

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
// export function applyMeshVisibility(group: Group, configuration: IConfiguration): void {
//   group.traverse((child) => {
//     if ((child as Mesh).isMesh) {
//       const meshName = child.name as keyof GLTFResult['nodes']

//       const findVisibility = (components: IConfiguration[]): boolean => {
//         return components.some(
//           (component) =>
//             component.meshes.includes(meshName) ||
//             (component.components && findVisibility(component.components)),
//         )
//       }

//       child.visible = findVisibility(configuration.components)
//     }
//   })
// }

// Function to apply a specified material or fallback to white material to all meshes
// export function applyMeshMaterial(group: Group, configuration: IConfiguration): void {
//   const whiteMaterial = new MeshStandardMaterial({ color: 'white' })

//   group.traverse((child) => {
//     if ((child as Mesh).isMesh) {
//       const mesh = child as Mesh
//       const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

//       const findMaterial = (
//         components: IConfiguration[],
//         meshName: keyof GLTFResult['nodes'],
//       ): Material => {
//         for (const component of components) {
//           if (component.meshes.includes(meshName)) {
//             return component.material ?? whiteMaterial
//           }
//           if (component.components) {
//             const material = findMaterial(component.components, meshName)
//             if (material) return material
//           }
//         }
//         return whiteMaterial // Default to whiteMaterial if no matching material is found
//       }

//       const material = findMaterial(configuration.components, meshName)

//       mesh.material = material
//     }
//   })
// }

// // Function to apply a specified material or texture to all meshes
// export function applyMeshMaterial(group: Group, configuration: IConfiguration): void {
//   const whiteMaterial = new MeshStandardMaterial({ color: 'white' })

//   const findMaterial = (
//     components: IConfiguration[],
//     meshName: keyof GLTFResult['nodes'],
//   ): MeshStandardMaterial => {
//     for (const component of components) {
//       if (component.meshes.includes(meshName)) {
//         const material = component.material ?? whiteMaterial

//         // If a texture is defined, use the loader to apply it
//         if (component.texture) {
//           const texture = useLoader(TextureLoader, component.texture)

//           // Check if the material is of type MeshStandardMaterial before applying texture
//           if (material instanceof MeshStandardMaterial) {
//             material.map = texture
//             material.needsUpdate = true // Update the material with the new texture
//           }
//         }

//         return material
//       }
//       if (component.components) {
//         const material = findMaterial(component.components, meshName)
//         if (material) return material
//       }
//     }
//     return whiteMaterial // Default to whiteMaterial if no matching material is found
//   }

//   group.traverse((child) => {
//     if ((child as Mesh).isMesh) {
//       const mesh = child as Mesh
//       const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

//       const material = findMaterial(configuration.components, meshName)
//       mesh.material = material
//     }
//   })
// }

// Function to apply visibility to specified meshes based on groupVisibility
// export function applyGroupVisibility(group: Group, configuration: IConfiguration): void {
//   // Function to determine visibility based on groupVisibility
//   const findGroupVisibility = (
//     components: IConfiguration[],
//     meshName: keyof GLTFResult['nodes'],
//   ): boolean | undefined => {
//     for (const component of components) {
//       if (component.meshes.includes(meshName)) {
//         return component.groupVisibility ?? true // Default to true if not specified
//       }
//       if (component.components) {
//         const visibility = findGroupVisibility(component.components, meshName)
//         if (visibility !== undefined) return visibility
//       }
//     }
//     return undefined // Return undefined if no matching component is found
//   }

//   // Traverse the group and apply visibility
//   group.traverse((child) => {
//     if ((child as Mesh).isMesh) {
//       const mesh = child as Mesh
//       const meshName = mesh.name as keyof GLTFResult['nodes'] // Assert type here

//       // Find visibility based on the configuration
//       const visibility = findGroupVisibility(configuration.components, meshName)

//       // Only set visibility if the mesh is specified in the components array
//       if (visibility !== undefined) {
//         mesh.visible = visibility
//       }
//     }
//   })
// }
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

export function hasUniqueComponentNames(components: IConfiguration[]): boolean {
  const names = components.map((c) => c.name)
  return new Set(names).size === names.length
}

// export const getConfiguredComponent = (
//   configuration: IConfiguration,
//   name: ELuthComponent,
// ): IConfiguration => {
//   const findComponent = (
//     components: IConfiguration[],
//     name: ELuthComponent,
//   ): IConfiguration | undefined => {
//     for (const component of components) {
//       if (component.name === name) return component
//       if (component.components?.length) {
//         const matched = findComponent(component.components, name)
//         if (matched) return matched
//       }
//     }
//     return undefined
//   }

//   if (!configuration.config.components) {
//     throw new Error(`No components found in configuration.`)
//   }

//   const matchedComponent = findComponent(configuration.config, name)
//   if (!matchedComponent) {
//     throw new Error(`Component '${name}' not found in configuration.`)
//   }

//   return matchedComponent
// }

// export const getConfiguredComponent = (
//   meshConfiguration: IMeshConfiguration<ELuthComponent>,
//   name: ELuthComponent,
// ): IMeshConfiguration<ELuthComponent> => {
//   const findComponent = (
//     component: IMeshConfiguration<ELuthComponent>,
//     name: ELuthComponent,
//   ): IMeshConfiguration<ELuthComponent> | undefined => {
//     if (component.name === name) return component

//     if (component.components) {
//       for (const child of component.components) {
//         const matched = findComponent(child as IMeshConfiguration<ELuthComponent>, name)
//         if (matched) return matched
//       }
//     }

//     return undefined
//   }

//   const matched = findComponent(meshConfiguration, name)

//   if (!matched) {
//     throw new Error(`Component '${name}' not found in configuration.`)
//   }

//   return matched
// }

export const getConfiguredComponent = (
  configuration: IConfiguration,
  name: ELuthComponent,
): IMeshConfiguration<ELuthComponent> => {
  const findComponent = (
    component: IMeshConfiguration<ELuthComponent>,
    name: ELuthComponent,
  ): IMeshConfiguration<ELuthComponent> | undefined => {
    if (component.name === name) return component

    if (component.components) {
      for (const child of component.components) {
        const matched = findComponent(child as IMeshConfiguration<ELuthComponent>, name)
        if (matched) return matched
      }
    }

    return undefined
  }

  const matched = findComponent(configuration.config, name)

  if (!matched) {
    throw new Error(`Component '${name}' not found in configuration.`)
  }

  return matched
}
