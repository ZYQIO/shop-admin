import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 注意: 在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块
// npm i -D @types/node
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
