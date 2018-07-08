// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import Navigation from '../components/Navigation/navigation'
import styles from './style.scss'


export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body className={styles.Font}>
          <Navigation/>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
