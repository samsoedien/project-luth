import bpy
import os

output_directory = os.path.dirname(bpy.data.filepath)


def import_usdz_files():
    # Get the directory of the current .blend file
    blend_dir = os.path.dirname(bpy.data.filepath)

    # File names to import
    usdz_files = ["Sides.usdz", "Soundboards.usdz"]

    # Check which USDZ file exists
    for usdz_file in usdz_files:
        usdz_path = os.path.join(blend_dir, usdz_file)

        # Name for the new collection based on the file
        collection_name = usdz_file.replace(".usdz", "_Collection")

        # Check if the file exists before importing
        if os.path.isfile(usdz_path):
            # Create a new collection and link it to the scene
            new_collection = bpy.data.collections.new(collection_name)
            bpy.context.scene.collection.children.link(new_collection)

            # Import the USDZ file with scale set to 0.001
            bpy.ops.wm.usd_import(filepath=usdz_path, scale=0.001)
            
            # After importing, move the imported objects to the new collection
            imported_objects = bpy.context.view_layer.objeaacts
            for obj in imported_objects:
                if obj.select_get():  # Check if the object was just imported (selected)
                    # Link the object to the new collection
                    new_collection.objects.link(obj)
                    # Unlink from the original collection (scene collection)
                    bpy.context.scene.collection.objects.unlink(obj)

            print(f"Imported {usdz_path} into collection '{collection_name}' with scale 0.001 successfully.")
        else:
            print(f"File {usdz_path} not found.")
            
            
def export_all_collections_as_glb(output_directory):
    """Exports all collections in the scene as GLB files."""
    # Ensure the output directory exists
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Loop through all collections in the scene
    for collection in bpy.data.collections:
        # Only export collections that have objects in them
        if len(collection.objects) > 0:
            # Set the collection to be active and select all its objects
            for obj in collection.objects:
                obj.select_set(True)

            # Set the path to export the GLB file
            glb_path = os.path.join(output_directory, f"{collection.name}.glb")

            # Export the selected objects as a GLB file
            bpy.ops.export_scene.gltf(filepath=glb_path, export_format='GLB')

            # Deselect all objects after export
            bpy.ops.object.select_all(action='DESELECT')

            print(f"Exported collection '{collection.name}' as GLB: {glb_path}")


def main():
    
    # Step 1: Import USDZ files (assuming this function is already defined in your script)
    import_usdz_files()

    # Step 2: Export all collections as GLB files
    export_all_collections_as_glb(output_directory)

    print("Main script executed successfully.")
    
    
    
# Run the main function
main()