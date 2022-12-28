import type { AppProps } from 'next/app';
import { ReactiumThemeProvider } from 'reactiumui';
import '../globalStyles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ReactiumThemeProvider scrollbar>
        <Component {...pageProps} />
      </ReactiumThemeProvider>
  )
}

export default MyApp
