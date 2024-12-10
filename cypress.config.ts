import { defineConfig } from "cypress"

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  e2e: {
    baseUrl: `http://to-dos.local.tourmalinecore.internal:40080`,
  },
  env: {
    API_URL: `http://localhost:5005/to-dos-api`,
  },
  component: {
    devServer: {
      framework: `react`,
      bundler: `vite`,
    },
    // that it quickly fails during the workshop
    defaultCommandTimeout: 500,
  },
})
