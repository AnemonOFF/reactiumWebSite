import type { AppProps } from 'next/app';
import { createTheme, darkTheme, lightTheme, ReactiumTheme, ReactiumThemeProvider } from '../reactiumui';
import '../globalStyles.css';
import { useEffect } from 'react';
import Prism from 'prismjs';

function MyApp({ Component, pageProps }: AppProps) {
  const theme: ReactiumTheme = {
    name: 'testtheme',
    theme: createTheme({
      colors: {
        text: 'red',
        primary: 'green'
      }
    })
  }

  useEffect(() => {
    Prism.highlightAll();
  }, [])

  return (
      <ReactiumThemeProvider customThemes={[lightTheme, darkTheme]} defaultTheme='light'>
        <Component {...pageProps} />
      </ReactiumThemeProvider>
  )
}

export default MyApp
