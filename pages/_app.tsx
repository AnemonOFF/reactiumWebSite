import type { AppProps } from 'next/app';
import { darkTheme, lightTheme, ReactiumThemeProvider } from '../reactiumui';
import '../globalStyles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ReactiumThemeProvider customThemes={[lightTheme, darkTheme]} defaultTheme='light'>
        <Component {...pageProps} />
      </ReactiumThemeProvider>
  )
}

export default MyApp
