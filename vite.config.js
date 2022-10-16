import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import {createVuePlugin} from 'vite-plugin-vue2';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        createVuePlugin()
    ],
});
