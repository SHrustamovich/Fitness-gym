import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~app": path.resolve(__dirname, "src/app"),
            "~components": path.resolve(__dirname, "src/components"),
            "~constants": path.resolve(__dirname, "src/constants"),
            "~context": path.resolve(__dirname, "src/context"),
            "~hooks": path.resolve(__dirname, "src/hooks"),
            "~pages": path.resolve(__dirname, "src/pages"),
            "~service": path.resolve(__dirname, "src/service"),
            "~utils": path.resolve(__dirname, "src/utils"),
        },
    },
});
