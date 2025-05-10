#Author-
#Description-

import adsk.core, adsk.fusion, adsk.cam, traceback

def run(context):
    ui = None
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface
        design = app.activeProduct
        root_comp = design.rootComponent

        # Specify the folder path where you want to save the files
        folder_path = '/Users/samsoedien/Desktop/fusion_exported_files'

        # Get all components in the root component
        all_occurrences = root_comp.occurrences

        for i, occurrence in enumerate(all_occurrences):
            component = occurrence.component

            # Isolate the current component
            for occ in all_occurrences:
                occ.isLightBulbOn = False  # Hide all components
            occurrence.isLightBulbOn = True  # Show the current component

            # Export the component as a STEP file
            export_mgr = design.exportManager
            filename = f"{folder_path}/{component.name}.stp"
            step_options = export_mgr.createSTEPExportOptions(filename, component)
            export_mgr.execute(step_options)
            print(f"Exported: {filename}")

        # After exporting, show all components again
        for occ in all_occurrences:
            occ.isLightBulbOn = True

        ui.messageBox('Components have been exported successfully.')

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))

# Entry point for the script
if __name__ == '__main__':
    run()

