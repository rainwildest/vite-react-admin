import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    // port: 3001, // 开发环境启动的端口
    //设置代理
    proxy: {
      "/api": {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
        target: "http://47.99.134.126:28019/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "") // 将 /api 重写为空
      }
    }
  }
});
