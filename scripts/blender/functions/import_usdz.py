import bpy
import os

def import_usdz_to_collections(base_path, import_scale=1):
    for config_folder in os.listdir(base_path):
        config_path = os.path.join(base_path, config_folder)
        if not os.path.isdir(config_path):
            continue

        top_collection_name = f"{config_folder}_collection"
        top_collection = bpy.data.collections.new(top_collection_name)
        bpy.context.scene.collection.children.link(top_collection)

        for file_name in os.listdir(config_path):
            if not file_name.lower().endswith(".usdz"):
                continue

            file_path = os.path.join(config_path, file_name)
            sub_name = os.path.splitext(file_name)[0].lower()
            sub_collection_name = f"{config_folder}_collection_{sub_name}"

            # Import the USDZ file with scale
            bpy.ops.wm.usd_import(filepath=file_path, scale=import_scale)

            # Collect all newly imported objects
            imported_objects = bpy.context.view_layer.objects
            sub_collection = bpy.data.collections.new(sub_collection_name)
            top_collection.children.link(sub_collection)

            # Move imported objects to their respective collection and apply scale
            for obj in imported_objects:
                if obj.select_get():  # Check if the object was just imported (selected)
                    if obj.type == 'MESH':
                        # Apply scale to the object if it's a mesh
                        bpy.context.view_layer.objects.active = obj
                        bpy.ops.object.transform_apply(scale=True)

                    # Link the object to the new sub-collection
                    sub_collection.objects.link(obj)
                    # Unlink the object from the scene collection
                    if bpy.context.scene.collection.objects.get(obj.name):
                        bpy.context.scene.collection.objects.unlink(obj)

            print(f"Imported {file_name} into collection '{sub_collection_name}'.")



