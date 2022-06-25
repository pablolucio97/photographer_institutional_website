import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                     {/* @ts-ignore */}
                     <meta charset="UTF-8"/>
                    <meta name="description" content="Landing pages de alta conversão e sites profissionais" />
                    <meta name="keywords" content="pablosilvadev pablo silva psd landing pages site institucional profissional " />
                    <meta name='author' content='Pablo Silva' />
                    <meta name="theme-color" content="#000000" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}