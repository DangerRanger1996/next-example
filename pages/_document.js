// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import Navigation from '../components/Navigation/navigation'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Spirax" rel="stylesheet" />
        </Head>
        <body>
          <Navigation/>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
