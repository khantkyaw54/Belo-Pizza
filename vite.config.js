const vitePluginSass = require('vite-plugin-sass');

module.exports = {
    plugins: [vitePluginSass()],
    build: {
        outDir: 'dist'
    }
};