const fs = require('fs')
const gltfPipeline = require('gltf-pipeline')
const { glbToGltf, processGltf } = gltfPipeline

// Load your geometry-only GLB file
const glb = fs.readFileSync('public/luth-acoustic-1.glb')

// Convert GLB to GLTF (JSON)
glbToGltf(glb)
  .then((gltf) => {
    // Log the structure of the GLTF to understand the available nodes and meshes
    console.log('GLTF structure:', JSON.stringify(gltf, null, 2))

    // Define your PBR material in KHR_materials_pbr format
    const pbrMaterial = {
      pbrMetallicRoughness: {
        baseColorFactor: [1.0, 1.0, 1.0, 1.0], // White base color
        metallicFactor: 0.3, // Adjust metallic factor
        roughnessFactor: 0.5, // Adjust roughness factor
      },
      normalTexture: {
        index: 0, // Assuming you have a texture loaded at index 0
      },
      extensions: {
        KHR_materials_pbr: {},
      },
    }

    // Ensure the GLTF has nodes and meshes
    if (gltf.nodes && gltf.meshes) {
      // Apply the PBR material to all meshes
      gltf.materials = [pbrMaterial] // Add the PBR material
      gltf.nodes.forEach((node) => {
        if (node.mesh !== undefined && gltf.meshes[node.mesh]) {
          gltf.meshes[node.mesh].primitives.forEach((primitive) => {
            primitive.material = 0 // Assign the first (and only) material
          })
        }
      })
    } else {
      console.error('GLTF does not contain nodes or meshes.')
      return
    }

    // Process GLTF to re-serialize it
    processGltf(gltf)
      .then((results) => {
        // Save the updated GLTF file (without compression)
        fs.writeFileSync('public/luth-acoustic-1-updated.gltf', Buffer.from(results.gltf))
        console.log('GLTF with PBR material saved to public/luth-acoustic-1-updated.gltf')
      })
      .catch((error) => {
        console.error('Error processing GLTF:', error)
      })
  })
  .catch((error) => {
    console.error('Error converting GLB to GLTF:', error)
  })
