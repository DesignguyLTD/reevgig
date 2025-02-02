import { Helmet } from "react-helmet-async";
import React from "react";

interface SeoProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  image?: string;
}
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  type = "website",
  name,
  image,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="" />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Reevgig" />
        <meta property="og:description" content={description} />

        {name && <meta name="twitter:creator" content={name} />}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    </>
  );
};

export default Seo;
