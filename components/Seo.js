import React from "react";
import Head from "next/head";

const Seo = ({
  title = "HB Fence | Quality Fencing Solutions",
  description = "HB Fence provides high-quality fencing solutions for residential and commercial properties in Houston, TX. Get your free quote today!",
  keywords = "Fencing, Fence Installation, Houston, HB Fence, Wood Fencing, Metal Fencing",
  image = "/images/hb-fence.webp",
  url = "https://hbfencellc-dcaebc9ff941.herokuapp.com/",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="HB Fence" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HB Fence",
            address: {
              streetAddress: "15608 S Brentwood St",
              addressLocality: "Channelview",
              addressRegion: "TX",
              postalCode: "77530",
              addressCountry: "US",
            },
            telephone: "+1-800-555-0199",
            url: "https://hbfencellc-dcaebc9ff941.herokuapp.com/",
            image:
              "https://hbfencellc-dcaebc9ff941.herokuapp.com/images/hb-fence.webp",
            description: description,
          }),
        }}
      />
    </Head>
  );
};

export default Seo;
