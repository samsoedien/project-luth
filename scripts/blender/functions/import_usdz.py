import bpy
import os

def import_usdz_to_collections(base_path, import_scale=1, filter_keywords=None):
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

            # Optional filtering by filename
            if filter_keywords:
                if not any(keyword.lower() in file_name.lower() for keyword in filter_keywords):
                    continue

            file_path = os.path.join(config_path, file_name)
            sub_name = os.path.splitext(file_name)[0].lower()
            sub_collection_name = f"{config_folder}_collection_{sub_name}"

            # Import the USDZ file with scale
            bpy.ops.wm.usd_import(filepath=file_path, scale=import_scale)

            # Create a new collection for this import
            sub_collection = bpy.data.collections.new(sub_collection_name)
            top_collection.children.link(sub_collection)

            # Get all selected (imported) objects
            imported_objects = [obj for obj in bpy.context.view_layer.objects if obj.select_get()]

            for obj in imported_objects:
                # Ensure unique name to avoid .001 suffix
                base_name = obj.name
                counter = 1
                while base_name in bpy.data.objects and bpy.data.objects[base_name] != obj:
                    base_name = f"{obj.name}_{counter}"
                    counter += 1
                obj.name = base_name

                # Apply scale to mesh
                if obj.type == 'MESH':
                    bpy.context.view_layer.objects.active = obj
                    bpy.ops.object.transform_apply(scale=True)

                # Link to sub-collection and unlink from scene
                sub_collection.objects.link(obj)
                if bpy.context.scene.collection.objects.get(obj.name):
                    bpy.context.scene.collection.objects.unlink(obj)

            print(f"Imported {file_name} into collection '{sub_collection_name}'.")
