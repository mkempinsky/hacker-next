import Document, {Head, Main, NextScript} from 'next/document';
import {globalStyles} from '../lib/styles';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Work+Sans"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                        crossOrigin="anonymous"
                    />
                    <meta name="description" content="A site built in next.js" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="no index, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <style>{globalStyles}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
export default MyDocument;
