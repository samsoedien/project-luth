import adsk.core, adsk.fusion, adsk.cam, traceback

def export_component_and_subcomponents(component, export_mgr, folder_path, all_occurrences, config_name):
    try:
        # Isolate the current component
        for occ in all_occurrences:
            occ.isLightBulbOn = False  # Hide all components

        # Find the occurrence of the component and show it
        for occ in all_occurrences:
            if occ.component == component:
                occ.isLightBulbOn = True
                break

        # Export the component as a STEP file, including the configuration name in the filename
        filename = f"{folder_path}/{config_name}_{component.name}.stp"
        step_options = export_mgr.createSTEPExportOptions(filename, component)
        export_mgr.execute(step_options)
        print(f"Exported: {filename}")

        # Recursively export subcomponents
        for sub_occurrence in component.occurrences:
            export_component_and_subcomponents(sub_occurrence.component, export_mgr, folder_path, all_occurrences, config_name)

    except:
        print(f"Failed to export {component.name} in configuration {config_name}")
        print(traceback.format_exc())

def run(context):
    ui = None
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface
        design = app.activeProduct
        root_comp = design.rootComponent

        # Specify the folder path where you want to save the files
        folder_path = '/Users/samsoedien/Desktop/fusion_exported_files'

        # Get the export manager
        export_mgr = design.exportManager

        # Manually enter the name of the active configuration
        config_name = "Your_Configuration_Name"

        # Get all occurrences in the root component for the active configuration
        all_occurrences = root_comp.allOccurrences

        # Export all components and subcomponents in the active configuration
        for occurrence in all_occurrences:
            component = occurrence.component
            export_component_and_subcomponents(component, export_mgr, folder_path, all_occurrences, config_name)

        # After exporting, show all components again
        for occ in root_comp.allOccurrences:
            occ.isLightBulbOn = True

        ui.messageBox(f'Configuration "{config_name}" has been exported successfully.')

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))

# Entry point for the script
if __name__ == '__main__':
    run()

