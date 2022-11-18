const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pages: resolve(__dirname, 'pages/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        article: resolve(__dirname, 'article/index.html')
      }
    }
  }
})