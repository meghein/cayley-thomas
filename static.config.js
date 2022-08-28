import { routes } from './routes.config'
require('dotenv').config()

export default {
  devServer: {
    port: 5000,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  getRoutes: async () => [
    ...routes
  ],
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-evergreen'
  ]
}
