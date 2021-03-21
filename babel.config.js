const config = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
}

module.exports = config
