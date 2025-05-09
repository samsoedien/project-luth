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

            before_objs = set(bpy.data.objects)
            bpy.ops.wm.usd_import(filepath=file_path, scale=import_scale)
            after_objs = set(bpy.data.objects)
            new_objs = [obj for obj in after_objs - before_objs]

            sub_collection = bpy.data.collections.new(sub_collection_name)
            top_collection.children.link(sub_collection)

            for obj in new_objs:
                sub_collection.objects.link(obj)
                if bpy.context.scene.collection.objects.get(obj.name):
                    bpy.context.scene.collection.objects.unlink(obj)


# def import_usdz_to_collections(directory, collection_name="Imported_USDZ_Files"):
#     # Ensure the directory exists
#     if not os.path.isdir(directory):
#         print(f"The directory '{directory}' does not exist.")
#         return

#     # Create or get the target collection
#     if collection_name in bpy.data.collections:
#         target_collection = bpy.data.collections[collection_name]
#     else:
#         target_collection = bpy.data.collections.new(collection_name)
#         bpy.context.scene.collection.children.link(target_collection)

#     # Iterate through all .usdz files in the directory
#     for filename in os.listdir(directory):
#         if filename.lower().endswith(".usdz"):
#             file_path = os.path.join(directory, filename)

#             # Import the USDZ file
#             bpy.ops.wm.usd_import(filepath=file_path, scale=1)

#             # Move imported objects to the target collection
#             imported_objects = bpy.context.view_layer.objects
#             for obj in imported_objects:
#                 if obj.select_get():  # Check if the object was just imported (selected)
#                     # Apply scale to the object if it's a mesh
#                     if obj.type == 'MESH':
#                         # Make the object active
#                         bpy.context.view_layer.objects.active = obj
#                         # Apply the scale
#                         bpy.ops.object.transform_apply(scale=True)

#                     # Link the object to the target collection
#                     target_collection.objects.link(obj)
#                     # Unlink from the original collection (scene collection)
#                     bpy.context.scene.collection.objects.unlink(obj)

#             print(f"Imported {filename} into collection '{collection_name}'.")
#         else:
#             print(f"Skipped non-USDZ file: {filename}")