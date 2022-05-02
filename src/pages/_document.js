import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" sizes="180x180" href="/public/static/icon.png" />
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/public/static/favicon-32x32.png" />
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/public/static/favicon-16x16.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}