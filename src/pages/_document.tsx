import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <script defer data-domain="rivo.gg" src="https://stats.wouldyoubot.gg/js/script.js"></script>
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Discover how Rivo, the leading online software company, is revolutionizing the tech industry with cutting-edge innovations and solutions." />
      <meta name="keywords" content="Rivo, software development, innovation, technology, online company, discord" />
      <meta property="og:title" content="Rivo - Riding on Innovation" />
      <meta property="og:description" content="Explore Rivo's pioneering solutions in software development, where innovation takes the lead. Join us on our journey to redefine online technology." />
      <meta property="og:image" content="https://imgur.com/SKiBTNX" />
      <meta property="og:url" content="https://rivo.gg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="0" />
        <meta name="theme-color" content="#3fd378" />
        <meta name="msapplication-TileColor" content="#3fd378" />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can rivo help my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rivo can help your business by providing you with the tools you need to succeed. We offer a wide range of services, including software development, web design, and community management. Our team is always available to answer any questions you may have about our products or services. Contact us today for more information!"
                  }
                }
                }
              ]
            }
  `,
          }}
        ></script>
    </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
