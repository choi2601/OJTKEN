import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/font/Roboto-Bold.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/font/Roboto-Regular.woff" as="font" crossOrigin="" />
        <link rel="preload" href="/font/Roboto-Light.woff" as="font" crossOrigin="" />
      </Head>
      <body id="body">
        <Main />
        <NextScript />
        <div id="portal-section" />
      </body>
    </Html>
  );
}

export default MyDocument;
