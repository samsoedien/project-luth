# Project Common

This project encapsulates the 3D experience created with React Three Fiber (R3F) and will be provided as a Microfrontend (whenever module federation support for Turbopack/NextJS is realised).

## Prepare Assets for R3F

1. Prepare geometries in Autodesk Fusion and export components as meshes.
2. Import into Blender and run python pipeline script to prepare assets and baked textures for GLTF.
3. Run GLTFJSX to create generated JSX components that can be rendered within R3F.

> yarn model:gltfsx
