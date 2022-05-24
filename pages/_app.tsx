import React from 'react';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import GlobalStyle from '@styles/global.style';
import GlobalFont from '@styles/font';

import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OJT-Ken</title>
      </Head>
      <GlobalStyle />
      <GlobalFont />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
