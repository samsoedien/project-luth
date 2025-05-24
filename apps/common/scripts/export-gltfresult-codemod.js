import { Project } from 'ts-morph'
import path from 'path'
import fs from 'fs'
import yargs from 'yargs'

// Handle CLI arguments
const argv = yargs(process.argv.slice(2))
  .option('dir', {
    alias: 'd',
    type: 'string',
    description: 'Directory path to search for TypeScript files',
    demandOption: true, // Ensure this option is provided
  })
  .option('type', {
    alias: 't',
    type: 'string',
    description: 'Type alias to export',
    default: 'GLTFResult', // Default to GLTFResult if not provided
  }).argv

// Resolve the directory path
const directoryPath = path.resolve(argv.dir)
const typeName = argv.type

const project = new Project({
  tsConfigFilePath: './tsconfig.json', // Path to tsconfig.json
})

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(`Unable to read directory: ${err.message}`)
    return
  }

  // Filter for .tsx files
  const tsxFiles = files.filter((file) => file.endsWith('.tsx'))

  tsxFiles.forEach((fileName) => {
    const filePath = path.join(directoryPath, fileName)
    const sourceFile = project.getSourceFile(filePath)

    if (!sourceFile) {
      console.error(`Source file not found: ${filePath}`)
      return
    }

    // Find the type alias
    const typeAlias = sourceFile.getTypeAlias(typeName)

    if (!typeAlias) {
      console.warn(`Type alias ${typeName} not found in ${filePath}`)
      return
    }

    // Set the type to be exported
    typeAlias.setIsExported(true)

    // Save the file with the new changes
    sourceFile.save().then(() => {
      console.log(`Codemod complete. 'export type ${typeName}' applied to ${filePath}`)
    })
  })
})
