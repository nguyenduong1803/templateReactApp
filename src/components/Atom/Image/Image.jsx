import { useState } from 'react';
import ImageDefault from '~/assets/svg/ImageDefault.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export default function Image({ src, alt = 'image', ...props }) {
  const [errorImage, setErrorImage] = useState('');
  const errorImages = () => {
    setErrorImage(ImageDefault);
  };
  return <Img onError={errorImages} src={errorImage.toString() || src.toString()} {...props} alt={alt} {...props}/>;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
