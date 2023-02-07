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
		sourceType: 'module'
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
		// 'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'prefer-template': 'error',
		'@typescript-eslint/no-unused-vars': [0],
		'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
		'no-tabs': 0
	}
};
