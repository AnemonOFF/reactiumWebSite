import type { AppProps } from 'next/app';
import { createTheme, darkTheme, lightTheme, ReactiumTheme, ReactiumThemeProvider } from '../reactiumui';
import '../globalStyles.css';

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

  return (
      <ReactiumThemeProvider customThemes={[lightTheme, darkTheme]} defaultTheme='light'>
        <Component {...pageProps} />
      </ReactiumThemeProvider>
  )
}

export default MyApp
