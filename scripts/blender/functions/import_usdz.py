import bpy
import os

default_keywords = ["Soundboard", "Back", "Sides", "Binding", "Neck", "Headstock", "Fretboard", "Bridge", "Pickguard", "Strings", "Purfling"]

def import_usdz_files(base_path, keywords=default_keywords, import_scale=1.0):
    """
    Imports .usdz files from a base path into collections based on matching keywords.
    
    Args:
        base_path (str): Path to the directory containing subfolders with .usdz files.
        keywords (list[str]): Keywords to match in filenames (e.g., ["Soundboard", "Sides"]).
        import_scale (float): Scale to apply during import.
    """

    # Create or retrieve top-level collections for each keyword
    keyword_collections = {}
    for keyword in keywords:
        collection_name = f"{keyword}_Collection"
        if collection_name in bpy.data.collections:
            keyword_collections[keyword] = bpy.data.collections[collection_name]
        else:
            new_collection = bpy.data.collections.new(collection_name)
            bpy.context.scene.collection.children.link(new_collection)
            keyword_collections[keyword] = new_collection

    # Iterate through config folders
    for config_folder in os.listdir(base_path):
        config_path = os.path.join(base_path, config_folder)
        if not os.path.isdir(config_path):
            continue

        for file_name in os.listdir(config_path):
            if not file_name.lower().endswith(".usdz"):
                continue

            matching_keyword = next(
                (kw for kw in keywords if kw.lower() in file_name.lower()), None
            )
            if not matching_keyword:
                continue

            collection = keyword_collections[matching_keyword]
            file_path = os.path.join(config_path, file_name)

            print(f"📦 Importing '{file_name}' to '{collection.name}'")

            # Track objects before import
            before_objs = set(bpy.data.objects)

            # Import USDZ
            bpy.ops.wm.usd_import(filepath=file_path, scale=import_scale)

            # Determine new objects
            after_objs = set(bpy.data.objects)
            new_objs = list(after_objs - before_objs)

            for obj in new_objs:
                # Make name unique
                base_name = obj.name
                counter = 1
                while base_name in bpy.data.objects and bpy.data.objects[base_name] != obj:
                    base_name = f"{obj.name}_{counter}"
                    counter += 1
                obj.name = base_name

                # Apply scale
                if obj.type == 'MESH':
                    bpy.context.view_layer.objects.active = obj
                    bpy.ops.object.transform_apply(scale=True)

                # Move to target collection
                collection.objects.link(obj)
                if bpy.context.scene.collection.objects.get(obj.name):
                    bpy.context.scene.collection.objects.unlink(obj)

            print(f"✅ Imported {len(new_objs)} objects from '{file_name}'")

