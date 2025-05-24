const gltfPipeline = require('gltf-pipeline')
const fsExtra = require('fs-extra')
const processGltf = gltfPipeline.processGltf
const gltf = fsExtra.readJsonSync('public/luth-acoustic-1.gltf')
const options = {
  separateTextures: true,
}
processGltf(gltf, options).then(function (results) {
  fsExtra.writeJsonSync('public/luth-acoustic-1', results.gltf)
  // Save separate resources
  const separateResources = results.separateResources
  for (const relativePath in separateResources) {
    if (separateResources.hasOwnProperty(relativePath)) {
      const resource = separateResources[relativePath]
      fsExtra.writeFileSync(relativePath, resource)
    }
  }
})
