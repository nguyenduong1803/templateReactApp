import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { CloseSvg } from '../../assets/svg';
function Modal({ children, modalStyle, Button, wrapStyle }) {
   const [shouldShow, setShouldShow] = useState(false);
   return (
      <>
         <Button onShouldModal={setShouldShow} />
         {shouldShow && (
            <section
               onClick={() => setShouldShow(false)}
               style={wrapStyle}
               className={`${styles.wrap} position-fixed full`}
            >
               <div
                  style={modalStyle}
                  onClick={(e) => e.stopPropagation()}
                  className={`${styles.modal} position-absolute center`}
               >
                  {children}
                  <CloseSvg onClick={() => setShouldShow(false)} className={`${styles.close} position-absolute`} />
               </div>
            </section>
         )}
      </>
   );
}
/* to use <Modal Button={Button} /> */
// const Button = ({ onShouldModal }) => (<button onClick={() => onShouldModal(true)}>Show Modal</button>)

Modal.propTypes = {
   children: PropTypes.func,
   modalStyle:PropTypes.object,
   Button: PropTypes.func,
   wrapStyle:PropTypes.object,
};
export default Modal;
