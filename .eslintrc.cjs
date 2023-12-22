module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/prettier', 'prettier'],
	plugins: ['svelte'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte/svelte' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2023
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
