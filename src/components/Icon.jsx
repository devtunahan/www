import React from 'react';
import PropTypes from 'prop-types';

function Icon({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-4 h-4 ${className}`}
    />
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
