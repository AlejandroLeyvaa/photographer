import React from 'react';

const ImageContainer = ({cls, src, srcDesktop, srcTablet, alt }) => {

  return (
    <figure className={cls} id='image-container'>
      <picture>
        <source media="(min-width:1024px)" srcSet={srcDesktop} />
        <source media="(min-width:768px)" srcSet={srcTablet} />
        <img src={src} alt={alt} />
      </picture>
    </figure>
  );
};

export default ImageContainer;
