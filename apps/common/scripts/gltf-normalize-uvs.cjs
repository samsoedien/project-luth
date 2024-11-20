const { Document, NodeIO } = require('@gltf-transform/core')
const { vec2 } = require('gl-matrix')

// Create an instance of NodeIO
const io = new NodeIO()

async function normalizeUVs(filePath, outputFilePath) {
  // Load the GLB or GLTF file
  const doc = await io.read(filePath)

  // Traverse all meshes
  const meshes = doc.getRoot().listMeshes()
  meshes.forEach((mesh) => {
    mesh.listPrimitives().forEach((primitive) => {
      const texcoordAccessor = primitive.getAttribute('TEXCOORD_0')

      if (texcoordAccessor) {
        // Get UVs and find min/max
        const uvs = texcoordAccessor.getArray()
        let min = vec2.fromValues(Infinity, Infinity)
        let max = vec2.fromValues(-Infinity, -Infinity)

        for (let i = 0; i < uvs.length; i += 2) {
          const u = uvs[i]
          const v = uvs[i + 1]

          min[0] = Math.min(min[0], u)
          min[1] = Math.min(min[1], v)
          max[0] = Math.max(max[0], u)
          max[1] = Math.max(max[1], v)
        }

        // Normalize UVs between 0 and 1
        const scale = vec2.fromValues(1 / (max[0] - min[0]), 1 / (max[1] - min[1]))

        for (let i = 0; i < uvs.length; i += 2) {
          uvs[i] = (uvs[i] - min[0]) * scale[0]
          uvs[i + 1] = (uvs[i + 1] - min[1]) * scale[1]
        }

        // Write back the normalized UVs
        texcoordAccessor.setArray(uvs)
      }
    })
  })

  // Write the modified GLB back to file
  await io.write(outputFilePath, doc)
}

// File paths
const inputFilePath = './public/luth.glb'
const outputFilePath = './public/luth-normalized.glb'

// Normalize UVs
normalizeUVs(inputFilePath, outputFilePath)
  .then(() => {
    console.log('UVs normalized and saved to', outputFilePath)
  })
  .catch((error) => {
    console.error('Error normalizing UVs:', error)
  })
