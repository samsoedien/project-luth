const yaml = require('yaml')

module.exports = {
  parsers: [
    {
      // A custom parser will only run against filenames that match the pattern
      // This pattern will match any file with the .yaml extension.
      // This allows you to mix different types of files in your token source
      pattern: /\.yaml$/,
      // the parse function takes a single argument, which is an object with
      // 2 attributes: contents which is a string of the file contents, and
      // filePath which is the path of the file.
      // The function is expected to return a plain object.
      parse: ({ contents, filePath }) => yaml.parse(contents),
    },
  ],
  source: [`src/**/*.yaml`],
  platforms: {
    'web/js': {
      transformGroup: 'js',
      buildPath: 'generated/web/es6/',
      prefix: 'token',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
    'web/scss': {
      transformGroup: 'scss',
      buildPath: 'generated/web/scss/',
      prefix: 'token',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    'web/json': {
      transformGroup: 'web',
      buildPath: 'generated/web/json/',
      prefix: 'token',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: 'generated/android/',
      prefix: 'token',
      files: [
        {
          destination: 'font_dimens.xml',
          format: 'android/fontDimens',
        },
        {
          destination: 'colors.xml',
          format: 'android/colors',
        },
      ],
    },
    ios: {
      transformGroup: 'ios',
      buildPath: 'generated/ios/',
      prefix: 'token',
      files: [
        {
          destination: 'StyleDictionaryColor.h',
          format: 'ios/colors.h',
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
          format: 'ios/colors.m',
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
          format: 'ios/static.h',
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
          format: 'ios/static.m',
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
      transformGroup: 'ios-swift',
      buildPath: 'generated/ios-swift/',
      prefix: 'token',
      files: [
        {
          destination: 'StyleDictionary.swift',
          format: 'ios-swift/class.swift',
          className: 'StyleDictionary',
          filter: {},
        },
      ],
    },
    'ios-swift-separate-enums': {
      transformGroup: 'ios-swift-separate',
      buildPath: 'generated/ios-swift/',
      prefix: 'token',
      files: [
        {
          destination: 'StyleDictionaryColor.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionaryColor',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.swift',
          format: 'ios-swift/enum.swift',
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
