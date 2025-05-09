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
# class ImportUSDZOperator(bpy.types.Operator):
#     bl_idname = "wm.import_luth_usdz"
#     bl_label = "Import USDZ Files"

#     def execute(self, context):
#         import_usdz_to_collections(base_path, import_scale=1, filter_keywords=["soundboard", "sides"])
#         self.report({'INFO'}, "USDZ files imported.")
#         return {'FINISHED'}

class ImportUSDZOperator(bpy.types.Operator):
    bl_idname = "wm.import_luth_usdz"
    bl_label = "Import USDZ Files"
    bl_options = {'REGISTER', 'UNDO'}

    import_soundboard: bpy.props.BoolProperty(name="Soundboard", default=True)
    import_sides: bpy.props.BoolProperty(name="Sides", default=True)
    import_back: bpy.props.BoolProperty(name="Back", default=False)
    import_binding: bpy.props.BoolProperty(name="Binding", default=False)
    import_neck: bpy.props.BoolProperty(name="Neck", default=False)
    import_bridge: bpy.props.BoolProperty(name="Bridge", default=False)
    clear_before_import: bpy.props.BoolProperty(name="Clear Before Import", default=True)

    def execute(self, context):
        keywords = []
        if self.import_soundboard:
            keywords.append("soundboard")
        if self.import_sides:
            keywords.append("sides")
        if self.import_back:
            keywords.append("back")
        if self.import_binding:
            keywords.append("binding")
        if self.import_neck:
            keywords.append("neck")
        if self.import_bridge:
            keywords.append("bridge")

        try:
            if self.clear_before_import:
                clear_scene()
                self.report({'INFO'}, "Scene cleared before import.")

            import_usdz_to_collections(base_path, import_scale=1, filter_keywords=keywords)
            self.report({'INFO'}, f"Imported USDZ files for: {', '.join(keywords)}")
        except Exception as e:
            self.report({'ERROR'}, f"Import failed: {e}")
            return {'CANCELLED'}

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
# Operator: Runn All Pipeline
# -------------------------------
class RunAllPipelineOperator(bpy.types.Operator):
    bl_idname = "wm.run_all_luth_pipeline"
    bl_label = "Run All Pipeline Tasks"

    def execute(self, context):
        wm = context.window_manager
        wm.progress_begin(0, 3)

        try:
            wm.progress_update(0)
            self.report({'INFO'}, "Step 1/3: Clearing scene...")
            clear_scene()

            wm.progress_update(1)
            self.report({'INFO'}, "Step 2/3: Importing USDZ files...")
            import_usdz_to_collections(base_path)

            wm.progress_update(2)
            self.report({'INFO'}, "Step 3/3: Exporting GLB files...")
            export_all_collections_as_glb(output_path, import_scale=1, filter_keywords=["soundboard", "sides"])

            self.report({'INFO'}, "Pipeline complete.")
        except Exception as e:
            self.report({'ERROR'}, f"Pipeline failed: {e}")
        finally:
            wm.progress_end()

        return {'FINISHED'}



# -------------------------------
# Operator: Popup Dialog
# -------------------------------
class LuthGLTFPipelinePopup(bpy.types.Operator):
    bl_idname = "wm.luth_gltf_pipeline_popup"
    bl_label = "Luth GLTF Pipeline Tools"

    # Add these inside LuthGLTFPipelinePopup
    import_soundboard: bpy.props.BoolProperty(name="Soundboard", default=True)
    import_sides: bpy.props.BoolProperty(name="Sides", default=True)
    import_back: bpy.props.BoolProperty(name="Back", default=False)
    import_binding: bpy.props.BoolProperty(name="Binding", default=False)
    import_neck: bpy.props.BoolProperty(name="Neck", default=False)
    import_bridge: bpy.props.BoolProperty(name="Bridge", default=False)

    def execute(self, context):
        return {'FINISHED'}

    def invoke(self, context, event):
        return context.window_manager.invoke_props_dialog(self, width=300)

    def draw(self, context):
        layout = self.layout
        layout.label(text="Run Luth Pipeline Tasks:")
        layout.separator()
        layout.operator("wm.clear_luth_scene", icon="TRASH")
        layout.prop(self, "import_soundboard")
        layout.prop(self, "import_sides")
        layout.prop(self, "import_back")
        layout.prop(self, "import_binding")
        layout.prop(self, "import_neck")
        layout.prop(self, "import_bridge")
        layout.operator("wm.import_luth_usdz", icon="IMPORT")
        layout.operator("wm.export_luth_glb", icon="EXPORT")
        layout.separator()
        layout.operator("wm.run_all_luth_pipeline", icon="PLAY")
        layout.label(text="Status will appear in the Info panel.")


# -------------------------------
# Register / Unregister
# -------------------------------
classes = (
    ClearSceneOperator,
    ImportUSDZOperator,
    ExportGLBOperator,
    RunAllPipelineOperator,
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


