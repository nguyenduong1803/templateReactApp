import { useState } from 'react';
import PropTypes from 'prop-types';
import { CloseSvg } from '../../../assets/svg';
import styled from 'styled-components';

export default function Modal({ children, w = '500px', h = '300px', modalStyle, Button, wrapStyle }) {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <Button onShouldModal={setShouldShow} />
      {shouldShow && (
        <Wrap onClick={() => setShouldShow(false)} style={wrapStyle} className='position-fixed full'>
          <ModalShow
            w={w}
            h={h}
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
            className='position-absolute center'
          >
            {children}
            <Close onClick={() => setShouldShow(false)} className='position-absolute' />
          </ModalShow>
        </Wrap>
      )}
    </>
  );
}
/* to use <Modal Button={Button} /> */
// const Button = ({ onShouldModal }) => (<button onClick={() => onShouldModal(true)}>Show Modal</button>)

const Wrap = styled.section`
  background-color: rgba(168, 168, 168, 0.3);
  z-index: 309;
`;
const ModalShow = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  max-width: calc(100% - (24px));
  background-color: var(--white);
  overflow: auto;
  padding: 12px;
`;
const Close = styled(CloseSvg)`
  right: 6px;
  top: 6px;
  :hover {
    cursor: pointer;
    fill: rgb(46, 46, 46);
    background-color: rgb(236, 234, 234);
    border-radius: 3px;
  }
`;
Modal.propTypes = {
  children: PropTypes.object,
  modalStyle: PropTypes.object,
  Button: PropTypes.func,
  wrapStyle: PropTypes.object,
  w: PropTypes.string,
  h: PropTypes.string
};
