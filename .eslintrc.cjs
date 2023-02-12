module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser'
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	ignorePatterns: ['**/*.css', '**/*.scss'],
	rules: {
		indent: ['error', 'tab'],
		'react/react-in-jsx-scope': 0,
		// 'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'prefer-template': 'error',
		'@typescript-eslint/no-unused-vars': [2],
		'no-unused-vars': [0],
		'no-tabs': 0
	}
};
