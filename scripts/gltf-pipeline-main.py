import os
import sys

# Path to your script directory
script_dir = "/Users/samsoedien/Documents/Repositories/project-luth/scripts/blender"

# Add to sys.path
if script_dir not in sys.path:
    sys.path.append(script_dir)

# Now import
from clear_scene import clear_scene
from import_usdz import import_usdz_to_collections
from export_glb import export_all_collections_as_glb

# Define your paths
base_path = "/Users/samsoedien/Desktop/Luth_Project/fusion_exports"
output_path = "/Users/samsoedien/Desktop/Luth_Project/blender_exports"


def main():
    print("== Blender pipeline started ==")
    clear_scene()
    import_usdz_to_collections(base_path, import_scale=0.001)
    export_all_collections_as_glb(output_path)
    print("== Blender pipeline finished ==")
main()
