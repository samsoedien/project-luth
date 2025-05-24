// import { useEffect } from 'react'
// import { ELuthComponent } from '~/models/configuration.model'
// import { IBodyOptions, useConfigurationStore } from '~/store/store'
// import { getConfiguredComponent } from '~/helpers/meshUtils'
// import { soundboardMeshMap } from '~/helpers/meshMap'

// export type SelectMeshesFunction = (bodyOptions: IBodyOptions, options: any) => string[] // Adjust the return type if meshes are not strings

// const useUpdateConfiguration = (
//   componentKey: ELuthComponent, // Soundboard, Back, etc.
//   options: any, // e.g., soundboardOptions, backOptions, etc.
//   dependencies: any[], // Options and other states to listen to
//   selectMeshes: SelectMeshesFunction, // Function to select the meshes
// ) => {
//   const setConfiguration = useConfigurationStore((state) => state.setConfiguration)

//   useEffect(() => {
//     const { bodyOptions, configuration } = useConfigurationStore.getState()

//     // Get the configured component for the current key (Soundboard, Back, etc.)
//     const component = getConfiguredComponent(configuration, componentKey)

//     if (component) {
//       // Use the custom mesh selection logic for each component
//       const selectedMeshes = selectMeshes(bodyOptions, options)

//       component.meshes = selectedMeshes
//     }

//     // Update the configuration in the store
//     setConfiguration({ ...configuration })
//   }, [options, ...dependencies]) // Listening to options and additional dependencies
// }

// // Example of `selectMeshes` function for different components
// const selectSoundboardMeshes: SelectMeshesFunction = (bodyOptions, soundboardOptions) => {
//   return (
//     soundboardMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[bodyOptions.armBevel]?.[
//       soundboardOptions.soundHole
//     ] ?? []
//   )
// }

// const selectBackMeshes: SelectMeshesFunction = (bodyOptions, backOptions) => {
//   return (
//     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ?? []
//   )
// }

// // Usage in a component
// const SoundboardComponent = () => {
//   const soundboardOptions = useConfigurationStore((state) => state.soundboardOptions)
//   const bodyOptions = useConfigurationStore((state) => state.bodyOptions) // Dependency

//   // Use the hook to update the configuration whenever options change
//   useUpdateConfiguration(
//     ELuthComponent.Soundboard,
//     soundboardOptions,
//     [bodyOptions],
//     selectSoundboardMeshes,
//   )

//   // Your component logic...
// }

// const BackComponent = () => {
//   const backOptions = useConfigurationStore((state) => state.backOptions)
//   const bodyOptions = useConfigurationStore((state) => state.bodyOptions) // Dependency

//   // Use the hook to update the configuration whenever options change
//   useUpdateConfiguration(ELuthComponent.Back, backOptions, [bodyOptions], selectBackMeshes)

//   // Your component logic...
// }
