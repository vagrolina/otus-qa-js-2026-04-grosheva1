module.exports = {
default: {
paths: [
'cucumber/features/**/*.feature'
],

require: [
  'cucumber/support/**/*.ts',
  'cucumber/steps/**/*.ts'
],

requireModule: [
  'ts-node/register'
],

format: [
  'progress'
]


}
}
