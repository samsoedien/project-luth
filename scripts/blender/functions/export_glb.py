import bpy
import os

def export_all_collections_as_glb(output_directory):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for collection in bpy.data.collections:
        if not collection.objects:
            continue

        bpy.ops.object.select_all(action='DESELECT')

        for obj in collection.objects:
            obj.select_set(True)

        bpy.context.view_layer.objects.active = collection.objects[0]

        glb_filename = f"{collection.name}.glb"
        glb_path = os.path.join(output_directory, glb_filename)

        bpy.ops.export_scene.gltf(
            filepath=glb_path,
            export_format='GLB',
            use_selection=True,
            export_apply=True,
            export_yup=True,
            export_animations=False,
            export_extras=False,
            export_lights=False,
            export_cameras=False
        )

        bpy.ops.object.select_all(action='DESELECT')
        print(f"✅ Exported: {glb_filename}")
