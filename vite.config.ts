import babel from '@rolldown/plugin-babel'
import tailwindcss from "@tailwindcss/vite"
import react, {reactCompilerPreset} from '@vitejs/plugin-react'
import path from 'node:path'
import {fileURLToPath} from "url"
import {defineConfig} from 'vite'
import svgr from "vite-plugin-svgr";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const createAlias = (dirname: string) => path.resolve(__dirname, `src/${dirname}`)


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
            // fastRefresh: true,
        }),
        babel({presets: [reactCompilerPreset()]}),
        tailwindcss(),
        svgr()
    ],
    resolve: {
        alias: {
            '@': createAlias(""),
            "@components": createAlias("components"),
            "~img": createAlias("assets/images"),
            "@style": createAlias("style"),
            "@types": createAlias("types"),
        }
    }
})
