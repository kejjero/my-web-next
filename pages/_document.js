import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
      </Head>
      <body className='body'>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
}
