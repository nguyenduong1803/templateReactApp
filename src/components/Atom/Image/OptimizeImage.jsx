import { useState } from 'react';
import ImageDefault from '~/assets/svg/ImageDefault.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function OptimizeImage({ listImage, alt, ...props }) {
  const [errorImage, setErrorImage] = useState('');
  const errorImages = () => {
    setErrorImage(ImageDefault);
  };
  //   computed srcSet
  let result = listImage.map((item) => `${item.path} ${item.width}w`).join();
  return (
    <p>
      <Img
        onError={errorImages}
        alt={alt || 'image'}
        srcSet={errorImage.toString() || result}
        sizes='(max-width: 479px) 100vw, (min-aspect-ratio: 626/417) calc((100vh - 184px) * 1.501199040767386), 
          (max-width: 1095px) calc(100vw - 40px), calc(100vw - 540px)'
        {...props}
      />
    </p>
  );
}

OptimizeImage.propTypes = {
  listImage: PropTypes.array.isRequired,
  alt: PropTypes.string
};

const Img = styled.img`
  width: 100%;
`;
export default OptimizeImage;
