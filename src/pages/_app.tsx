import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "@/styles/globals.css";

//componente
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

//defino las props de este componente:
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout 
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //punto central de la aplicacion
  const getLayout = Component.getLayout || ((page) => page);
  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />); //renderiza el componente
}
