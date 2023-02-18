import { FC } from "react";
import Head from "next/head";
import Script from "next/script";

const seo = {
  image: "/screenshot.png",
  description:
    "Hello I am Indranil Halder and I am a MERN Stack developer JavaScript enthusiast who has a predilection for design and enjoy working on projects where approaching design and development as co-dependent processes can lead to smarter solutions and a better overall product experience for human beings.",
  title: "Indranil Halder | Portfolio",
  url: "https://github.com/indranildeveloper",
  twitterUsername: "@indranilcoder",
};

const Seo: FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />

        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <title>{seo.title}</title>
      </Head>
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZ5MRLK');`}
      </Script>
      {/* <!-- End Google Tag Manager --> */}
    </>
  );
};

export default Seo;
