import { FC } from "react";
import Head from "next/head";

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
    );
};

export default Seo;
