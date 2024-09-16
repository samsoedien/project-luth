import { Group, Mesh, Material, MeshStandardMaterial } from 'three'

// Applies group visibility based on the groupVisibilityConfig
export const applyGroupVisibility = (
  group: Group,
  groupVisibilityConfig?: Record<string, boolean>,
) => {
  if (!groupVisibilityConfig) return

  group.children.forEach((child) => {
    if (child instanceof Group && groupVisibilityConfig[child.name] !== undefined) {
      child.visible = groupVisibilityConfig[child.name]
    }
  })
}

// Applies mesh visibility and material changes based on the meshVisibilityConfig
export const applyMeshConfig = (
  group: Group,
  meshVisibilityConfig: Record<string, { visible: boolean; material?: Material }>,
) => {
  group.traverse((child) => {
    if (child instanceof Mesh && meshVisibilityConfig[child.name]) {
      const config = meshVisibilityConfig[child.name]
      child.visible = config.visible

      // Apply material if defined
      if (config.material) {
        child.material = config.material
      }
    }
  })
}

// Sets all meshes in the group to a standard white material
export const setMeshesToStandardWhiteMaterial = (group: Group) => {
  const whiteMaterial = new MeshStandardMaterial({ color: 'white' })

  group.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = whiteMaterial
    }
  })
}
