import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
//punto central de la aplicacion
  const getLayout = Component.getLayout || ((page) => page);
  // return <Component {...pageProps} />

return getLayout(<Component {...pageProps} />) //renderiza el componente
}
