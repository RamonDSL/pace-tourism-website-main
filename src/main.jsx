import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import MyProvider from './Store/MyProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MyProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
      </MyProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
