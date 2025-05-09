import bpy
import os
import sys
import importlib

# Add script path
script_dir = "/Users/samsoedien/Documents/Repositories/project-luth/scripts/blender/functions"
if script_dir not in sys.path:
    sys.path.append(script_dir)

# Import full modules
import clear_scene
import import_usdz
import export_glb

# Reload them so changes take effect
importlib.reload(clear_scene)
importlib.reload(import_usdz)
importlib.reload(export_glb)

# Now get the functions
from clear_scene import clear_scene
from import_usdz import import_usdz_to_collections
from export_glb import export_all_collections_as_glb

# Your project paths
base_path = "/Users/samsoedien/Desktop/Luth_Project/fusion_exports"
output_path = "/Users/samsoedien/Desktop/Luth_Project/blender_exports"


# -------------------------------
# Operator: Clear Scene
# -------------------------------
class ClearSceneOperator(bpy.types.Operator):
    bl_idname = "wm.clear_luth_scene"
    bl_label = "Clear Scene"

    def execute(self, context):
        clear_scene()
        self.report({'INFO'}, "Scene cleared.")
        return {'FINISHED'}


# -------------------------------
# Operator: Import USDZ
# -------------------------------
class ImportUSDZOperator(bpy.types.Operator):
    bl_idname = "wm.import_luth_usdz"
    bl_label = "Import USDZ Files"

    def execute(self, context):
        import_usdz_to_collections(base_path, import_scale=0.001)
        self.report({'INFO'}, "USDZ files imported.")
        return {'FINISHED'}


# -------------------------------
# Operator: Export GLB
# -------------------------------
class ExportGLBOperator(bpy.types.Operator):
    bl_idname = "wm.export_luth_glb"
    bl_label = "Export GLB Files"

    def execute(self, context):
        export_all_collections_as_glb(output_path)
        self.report({'INFO'}, "GLB files exported.")
        return {'FINISHED'}


# -------------------------------
# Operator: Popup Dialog
# -------------------------------
class LuthGLTFPipelinePopup(bpy.types.Operator):
    bl_idname = "wm.luth_gltf_pipeline_popup"
    bl_label = "Luth GLTF Pipeline Tools"

    def execute(self, context):
        return {'FINISHED'}

    def invoke(self, context, event):
        return context.window_manager.invoke_props_dialog(self, width=300)

    def draw(self, context):
        layout = self.layout
        layout.label(text="Run Luth Pipeline Tasks:")
        layout.separator()
        layout.operator("wm.clear_luth_scene", icon="TRASH")
        layout.operator("wm.import_luth_usdz", icon="IMPORT")
        layout.operator("wm.export_luth_glb", icon="EXPORT")


# -------------------------------
# Register / Unregister
# -------------------------------
classes = (
    ClearSceneOperator,
    ImportUSDZOperator,
    ExportGLBOperator,
    LuthGLTFPipelinePopup,
)

def register():
    for cls in classes:
        try:
            bpy.utils.register_class(cls)
        except RuntimeError:
            bpy.utils.unregister_class(cls)
            bpy.utils.register_class(cls)

def unregister():
    for cls in reversed(classes):
        try:
            bpy.utils.unregister_class(cls)
        except RuntimeError:
            pass

# -------------------------------
# Entry Point for Script Execution
# -------------------------------
if __name__ == "__main__":
    register()
    bpy.ops.wm.luth_gltf_pipeline_popup('INVOKE_DEFAULT')