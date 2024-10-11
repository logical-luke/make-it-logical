import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import EnvironmentPlugin from 'vite-plugin-environment';
import { fileURLToPath, URL } from "node:url";
import { splitVendorChunkPlugin } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    server: {
        port: 5173,
    },
    plugins: [
        vue(),
        vueJsx(),
        EnvironmentPlugin({
            API_BASE_URL: 'https://api.makeitlogical.io/v1',
            NODE_ENV: process.env.NODE_ENV || 'development'
        }),
        splitVendorChunkPlugin(),
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
        tsconfigPaths(), // Add this to resolve TypeScript paths
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
                chunkFileNames: (chunkInfo) => {
                    const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
                    const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
                    return `js/${fileName}/[name].[hash].js`;
                },
            },
        },
    },
    optimizeDeps: {
        include: ['vue', 'vue-router'], // Add your main dependencies here
    },
});