import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./global/globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";


function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App;