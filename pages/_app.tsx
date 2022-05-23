import Head from 'next/head';
import type { AppProps } from 'next/app';

import GlobalStyle from '@styles/global.style';
import GlobalFont from '@styles/font';

import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OJT-Ken</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFont />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
