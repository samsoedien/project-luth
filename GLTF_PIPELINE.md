# GLTF Pipeline

This section covers the process of turning Fusion CAD models in to web ready 3D assets usable within a R3F context.

The following software and plugins are needed:

- A copy of Fusion with configuration workflow.
- A copy of Blender with SimpleBake plugin to bake textures in bulk.
- The GLTFJSX CLI to create declarative R3F syntax from GLTF files

## Fusion 360 Workflow

Within Fusion a parametic model is being created with the following structure in component hierarchy:

- Soundboard
- Back
- Sides
- Binding
- Neck
- Headstock
- Fretboard
- Bridge
- Pickguard
- Strings

Each component has sub-components nested within them and have a relation with there parent. Each component can has different variations in bodies which can later be toggled in the configurator.

### Mesh Naming Convention

Body names are unique and are writting using snake_casing: `body_soundboard_cutaway_venetian_arm_bevel_standard`

`TYPE: 'Mesh' | 'Material` // A prefix that determines if we are talking about a mesh or material, each will be handled different in R3F.
`CODE: 'Luth'` // Project name code for scalability to introduce new project types here
`MODEL: 'ACOU' | 'ELEC' | 'CLAS' |  'BASS' | 'BARI' | 'UKUL' |  'TWLV' | 'MINI' | 'TRVL' | 'SMHL' | 'HLBD' | 'ELAC' | 'RESO'` // List of possible product lines (Needs an entire different 3D model??)
`CONFIGURATION: 'DREA' | 'PARL' | 'JUMB' | 'AUDI' | 'CONC' | 'GCON'`
`SCALE_LENGTH: 25 | 23-75`
`STRINGS: 6 | 12 | 4 | 7 | 8 | 9`
`COMPONENT: SOUN | BACK | SIDE | BIND | NECK | HEAD | FRET | BRID | PICK | STRN`
`BODY_VARIATION`: 'CW_Ven' | 'CW_Flo' | 'Cw_Sca_Ab_Std'`

`{TYPE}_{CODE}_{MODEL}_{CONFIGURATION}_{STRINGS}_{COMPONENT}_{BODY_VARIATION}`
`Mesh_Luth_Acou_Drea_6_Soundboard_Cw_Sca_Ab_Std`
`Material_Luth_Acou_Drea_6_Soundboard_Cw_Sca_Ab_Std_Rosewood`

`{TYPE}__{MODEL}__{CONFIGURATION}__{COMPONENT}_{BODY_VARIATION}`
`Mesh__Acou__Drea_24in_12str__Soun__CW_Ven_AB_Std`

Configuration = (BodyShape + ScaleLenght + StringCount)

`mesh__acou__drea_24in_12str__soun__cw_ven_ab_std`
`mesh__acou__drea_24-2375in_12str__soun__cw_ven_ab_std`
`mesh_acou_drea_24in_12str_soun_cw_ven_ab_std`

Conclusion:
A name is build using first the CAD model that is being used (We start we an acoustic model only annotated with the Acou abbreviation).
Secondly a configuration is used within Fusion that have variations configured such as body shapes and scale lengths. These variations mostly target sketch dimensions fully utilising the parametic nature of the CAD model. (for example Drea_24in_6str).
Thirdly the fusion body varation is added in combination with an abbreviation of the component name (example: Soun\_\_CW_Ven_AB_Std)
Lastly a prefix of type is put in front to make clear what kind of asset we are talking about here: mesh or material

### Usage

Therefore the process of exporting will be as follows:

- Select a configuration which needed to export. E.g. Acoustic_Dreadnought_25Inch_ScaleLength
- Right click on each component and isolate them with all bodies visible.
- Export each component as .USDZ file in the fusion_exports folder.

The `fusion_exports` folder is organised as follows:

- {component_name}\_variants (e.g. soundboard_variants, sides_variants, heel_tail_block_variants)
  - acoustic*{configuration_name}*{component_name} (e.g. acoustic_dreadnought_25inch_soundboards, acoustic_parlor_243/4inch_soundboards)

This process needs to be automated using the python scripting feature within Fusion. However as on the time of documenting this there is no API yet to interact with th configurations to toggle them programmatically.

**Main responsiblity: Hierarchical structure of all meshes that follow a naming conventions to enforce unique indentifiers**

## Blender

Open the main file `luth.blender` and navigate to the scripts tab and open the `gltf_pipeline.py` script. When running the script it automatically creates web ready assets for the configurator.

These are the steps which will be performed:

- Clear the scene to start from a blank slate.
- Import each exported fusion .USDZ file from the `fusion_export` folder and creates collections based per component name: {component_name}\_Collection and put the meshes into it according to the naming convention prior specified.
- Apply materials to all the meshes within a specific collection.
- Use SimpleBake to bake the material to each mesh. It will preload a defined preset and bake each texture according to set specifications.
- Export each collection as a GLTF/GLB containing all variant meshes and baked materials in one asset.

Blender is mainly used here due to its powerfull scripting capabilities in automating this entire process from transitioning NURBS based CAD models into trangulated meshes that can be used for the web.

Additionally Blender material node support allows the creation of procedural wooden materials that are used the create seemingly realtistic appearances for the configurator.

**Main responsiblity: Create and tweak highly realistic procedural materials & export web ready collections as GLTF/GLB files and baked textures**

## GLTFJSX

**Main responsiblity: Outputs type safe TSX code from GLB files that are optimized for consumption of R3F and custom configurator logic**
