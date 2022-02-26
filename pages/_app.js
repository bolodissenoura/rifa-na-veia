import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes/styles';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )

}

export default MyApp
