const color = require('ansi-colors')
const changeCase = require('change-case')
const inflection = require('inflection')

const messageFunctionsMap = {
  model: ({ modelName }) => {
    const modelNamePascal = changeCase.pascalCase(modelName)
    const modelNamePascalPlural = inflection.pluralize(modelNamePascal)

    let message = 'Choose a name for the component.\n'
    message += color.red('It should include the ')
    message += color.bold.underline.red('model name')

    message += '\n'

    message += 'e.g. '
    message += color.bold.green('Create')
    message += color.bold.underline.green(modelNamePascalPlural)
    message += color.bold.green('Table')
    message += ' or '
    message += color.bold.underline.green(`${modelNamePascal}`)
    message += color.bold.green('DetailsCard')

    return message
  },
  base: () => {
    let message = 'Choose a name for the component.\n'

    message += color.red('It should start with a capital ')
    message += color.bold.underline.red('B\n')

    message += 'e.g. '
    message += color.bold.green('BForm')
    message += ' or '
    message += color.bold.green('BDialogButton')

    return message
  },
  other: () => {
    let message = 'Choose a name for the component.\n'

    message += '\n'

    message += 'e.g. '
    message += color.bold.green('SourceVideoImporterForm')
    message += ' or '
    message += color.bold.green('CalculateVideoRatioCard')

    return message
  },
}

const validateFunctionsMap = {
  model: (value, { modelName }) => {
    const modelNamePascal = changeCase.pascalCase(modelName)
    const modelNamePascalPlural = inflection.pluralize(modelNamePascal)
    const missingModelsName = !value.includes(modelNamePascal) &&
      !value.includes(modelNamePascalPlural)

    if (missingModelsName) {
      return `component must include either '${modelNamePascal}' or '${modelNamePascalPlural}' in its name`
    }

    return true
  },
  base: (value) => {
    if (value[0] !== 'B') {
      return 'first character must be an uppercase "B"'
    }

    return true
  },
  other: (value) => {
    const numberOfCapitalLetters = (value.match(/[A-Z]/g) || []).length
    if (numberOfCapitalLetters < 1) {
      return 'component name must be in pascal case, and multi-word'
    }
    return true
  },
}

module.exports = (answers) => {
  return {
    type: 'input',
    name: 'componentName',
    message () {
      return messageFunctionsMap[answers.componentType](answers)
    },
    validate (value, state) {
      return validateFunctionsMap[answers.componentType](value, answers)
    },
  }
}
