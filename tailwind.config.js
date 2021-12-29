module.exports = {
  purge: ['./index.html', './*.{js,ts}'],
  darkMode: 'media', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('daisyui'),
	],
}