exports.getBabelOptions = ({useESModules}) => ({
  presets: [['@babel/env', {loose: true}], '@babel/flow', '@babel/react'],
  plugins: [
    ['@babel/proposal-class-properties', {loose: true}],
    ['@babel/transform-runtime', {useESModules}],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['dev-expression']
  ]
})
