// const yaml = require('yaml')

import yaml from 'yaml'
import { formats, transformGroups } from 'style-dictionary/enums'

export default {
  hooks: {
    parsers: {
      'yaml-parser': {
        // A custom parser will only run against filenames that match the pattern
        // This pattern will match any file with the .yaml extension.
        // This allows you to mix different types of files in your token source
        pattern: /\.yaml$/,
        // the parse function takes a single argument, which is an object with
        // 2 attributes: contents which is a string of the file contents, and
        // filePath which is the path of the file.
        // The function is expected to return a plain object.
        parser: ({ contents }) => yaml.parse(contents),
      },
    },
  },
  parsers: ['yaml-parser'],
  source: [`src/**/*.yaml`],
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: 'generated/',
      files: [
        {
          destination: 'variables.css',
          format: formats.cssVariables,
        },
      ],
    },
    'web/js': {
      transformGroup: transformGroups.js,
      buildPath: 'generated/web/es6/',
      prefix: 'token',
      files: [
        {
          destination: 'tokens.js',
          format: formats.javascriptEs6,
        },
      ],
    },
    'web/scss': {
      transformGroup: transformGroups.scss,
      buildPath: 'generated/web/scss/',
      prefix: 'token',
      files: [
        {
          destination: '_variables.scss',
          format: formats.scssVariables,
        },
      ],
    },
    'web/json': {
      transformGroup: transformGroups.web,
      buildPath: 'generated/web/json/',
      prefix: 'token',
      files: [
        {
          destination: 'tokens.json',
          format: formats.jsonFlat,
        },
      ],
    },
    android: {
      transformGroup: transformGroups.android,
      buildPath: 'generated/android/',
      prefix: 'token',
      files: [
        {
          destination: 'font_dimens.xml',
          format: formats.androidFontDimens,
        },
        {
          destination: 'colors.xml',
          format: formats.androidColors,
        },
      ],
    },
    ios: {
      transformGroup: transformGroups.ios,
      buildPath: 'generated/ios/',
      prefix: 'token',
      files: [
        {
          destination: 'StyleDictionaryColor.h',
          format: formats.iosColorsH,
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionaryColor.m',
          format: formats.iosColorsM,
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.h',
          format: formats.iosStaticH,
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.m',
          format: formats.iosStaticM,
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
      ],
    },
    'ios-swift': {
      transformGroup: transformGroups.iosSwift,
      buildPath: 'generated/ios-swift/',
      prefix: 'token',
      files: [
        {
          destination: 'StyleDictionary.swift',
          format: formats.iosSwiftClassSwift,
          className: 'StyleDictionary',
          filter: {},
        },
      ],
    },
    'ios-swift-separate-enums': {
      transformGroup: transformGroups.iosSwiftSeparate,
      buildPath: 'generated/ios-swift/',
      prefix: 'token',
      files: [
        {
          destination: 'StyleDictionaryColor.swift',
          format: formats.iosSwiftEnumSwift,
          className: 'StyleDictionaryColor',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.swift',
          format: formats.iosSwiftEnumSwift,
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
      ],
    },
  },
}
