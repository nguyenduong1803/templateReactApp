import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
const Gallery = styled.ul`
  padding: 1rem;
  height: 100px;
  scroll-snap-type: both mandatory;
  scroll-padding: 1rem;
  overflow: hidden;
  margin: 0 -11px;
  cursor: pointer;
  &.active {
    scroll-snap-type: unset;
  }
`;

function Carosel({ children, ...props }) {
  const refGallery = useRef();
  useEffect(() => {
    const slider = refGallery?.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', (_) => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', (_) => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const SCROLL_SPEED = 2;
      const walk = (x - startX) * SCROLL_SPEED;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
  return (
    <Gallery className='d-flex' ref={refGallery} {...props}>
      {children}
    </Gallery>
  );
}

export default Carosel;
