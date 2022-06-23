import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="react components" />
                    <meta name="keywords" content="react components " />
                    <meta name='author' content='react components' />
                    <meta name='author' content='react components' />
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