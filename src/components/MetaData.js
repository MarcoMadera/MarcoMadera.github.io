import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import ThemeContext from "../ThemeContext";
import PropTypes from "prop-types";

const MetaData = ({ title, description, image }) => {
  const url = document.location.href;
  const darkMode = useContext(ThemeContext);
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@madera_marco" />
      <meta name="twitter:site" content="@madera_marco" />
      {darkMode === true ? (
        <meta name="theme-color" content="#000000" />
      ) : (
        <meta name="theme-color" content="#ffffff" />
      )}
    </Helmet>
  );
};

MetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default MetaData;
