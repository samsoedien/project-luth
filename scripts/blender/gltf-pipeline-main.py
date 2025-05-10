import bpy
import os
import sys
import importlib

# Add script path
script_dir = "/Users/samsoedien/Documents/Repositories/project-luth/scripts/blender/functions"
if script_dir not in sys.path:
    sys.path.append(script_dir)

# Import and reload modules
import clear_scene
import import_usdz
import export_glb

importlib.reload(clear_scene)
importlib.reload(import_usdz)
importlib.reload(export_glb)

from clear_scene import clear_scene
from import_usdz import import_usdz_files
from export_glb import export_all_collections_as_glb

# Project paths
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
    bl_options = {'REGISTER', 'UNDO'}

    import_soundboard: bpy.props.BoolProperty(name="Soundboard", default=False)
    import_back: bpy.props.BoolProperty(name="Back", default=False)
    import_sides: bpy.props.BoolProperty(name="Sides", default=False)
    import_binding: bpy.props.BoolProperty(name="Binding", default=False)
    import_neck: bpy.props.BoolProperty(name="Neck", default=False)
    import_headstock: bpy.props.BoolProperty(name="Headstock", default=False)
    import_fretboard: bpy.props.BoolProperty(name="Fretboard", default=False)
    import_bridge: bpy.props.BoolProperty(name="Bridge", default=False)
    import_pickguard: bpy.props.BoolProperty(name="Pickguard", default=False)
    import_strings: bpy.props.BoolProperty(name="Strings", default=False)

    def execute(self, context):
        keywords = []
        if self.import_soundboard:
            keywords.append("Soundboard")
        if self.import_back:
            keywords.append("Back")
        if self.import_sides:
            keywords.append("Sides")
        if self.import_binding:
            keywords.append("Binding")
        if self.import_neck:
            keywords.append("Neck")
        if self.import_headstock:
            keywords.append("Headstock")
        if self.import_fretboard:
            keywords.append("Fretboard")
        if self.import_bridge:
            keywords.append("Bridge")
        if self.import_pickguard:
            keywords.append("Pickguard")
        if self.import_strings:
            keywords.append("Strings")

        import_usdz_files(base_path, keywords if keywords else None)
        self.report({'INFO'}, f"Imported USDZ files for: {', '.join(keywords) if keywords else 'ALL'}")
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
# Operator: Run All Pipeline
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
            import_usdz_files(base_path)

            wm.progress_update(2)
            self.report({'INFO'}, "Step 3/3: Exporting GLB files...")
            export_all_collections_as_glb(output_path)

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

    import_soundboard: bpy.props.BoolProperty(name="Soundboard", default=False)
    import_back: bpy.props.BoolProperty(name="Back", default=False)
    import_sides: bpy.props.BoolProperty(name="Sides", default=False)
    import_binding: bpy.props.BoolProperty(name="Binding", default=False)
    import_neck: bpy.props.BoolProperty(name="Neck", default=False)
    import_headstock: bpy.props.BoolProperty(name="Headstock", default=False)
    import_fretboard: bpy.props.BoolProperty(name="Fretboard", default=False)
    import_bridge: bpy.props.BoolProperty(name="Bridge", default=False)
    import_pickguard: bpy.props.BoolProperty(name="Pickguard", default=False)
    import_strings: bpy.props.BoolProperty(name="Strings", default=False)

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
        layout.prop(self, "import_back")
        layout.prop(self, "import_sides")
        layout.prop(self, "import_binding")
        layout.prop(self, "import_neck")
        layout.prop(self, "import_headstock")
        layout.prop(self, "import_fretboard")
        layout.prop(self, "import_bridge")
        layout.prop(self, "import_pickguard")
        layout.prop(self, "import_strings")

        # Properly assign props to the operator
        import_op = layout.operator("wm.import_luth_usdz", icon="IMPORT")
        import_op.import_soundboard = self.import_soundboard
        import_op.import_back = self.import_back
        import_op.import_sides = self.import_sides
        import_op.import_binding = self.import_binding
        import_op.import_neck = self.import_neck
        import_op.import_headstock = self.import_headstock
        import_op.import_fretboard = self.import_fretboard
        import_op.import_bridge = self.import_bridge
        import_op.import_pickguard = self.import_pickguard
        import_op.import_strings = self.import_strings

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
# Entry Point
# -------------------------------
if __name__ == "__main__":
    register()
    bpy.ops.wm.luth_gltf_pipeline_popup('INVOKE_DEFAULT')
