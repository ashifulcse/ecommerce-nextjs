/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        /> 
  

        <Head>
          <meta name="description" content=" " />
          <meta property="og:type" content="article" />
          <meta property="og:title" content=" " />
          <meta property="og:description" content="" />
          <meta property="og:image" content="#" />
          <meta property="og:url" content="#" />
          <meta property="og:site_name" content=" " />
        </Head>

        <body>
          <Main />
          <NextScript /> 
        </body>
      </Html>
    );
  }
}

export default MyDocument;
