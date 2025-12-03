import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: 重要！發布前請修改此處
  // 如果你的 GitHub Repository 名稱是 'zhenmen-temple'，請保留 '/zhenmen-temple/'
  // 如果你的 Repository 名稱不同，請修改為 '/你的Repo名稱/'
  base: '/zhenmen-temple/',
});