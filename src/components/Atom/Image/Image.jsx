import { useState } from 'react';
import ImageDefault from '~/assets/svg/ImageDefault.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export default function Image({ src, objectFit = 'contain', alt = 'image', w = '100%', h = '100%', ...props }) {
  const [errorImage, setErrorImage] = useState('');
  const errorImages = () => {
    setErrorImage(ImageDefault);
  };
  return (
    <Img
      onError={errorImages}
      src={errorImage.toString() || src.toString()}
      objectFit={objectFit}
      w={w}
      h={h}
      alt={alt}
      {...props}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Img = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  object-fit: ${(props) => props.objectFit};
`;
