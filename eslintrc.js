const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc.json'), 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'prefer-destructuring': [2, { object: true, array: true }],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'no-console': 1,
    camelcase: 0,
    'no-unused-vars': 1,
    'no-underscore-dangle': 0,
    'prefer-template': 2,
    'react/forbid-prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-sort-props': 2,
    'react/jsx-props-no-spreading': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['app'],
        extensions: ['.js', '.jsx'],
      },
      webpack: {
        config: './config/webpack/webpack.prod.babel.js',
      },
    },
  },
};
