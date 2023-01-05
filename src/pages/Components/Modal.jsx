import React from 'react';
import Button from '~/components/Atom/Button/Button';
import Modal from '~/components/Molecule/Modal/Modal';
import { Col, Grid } from '~/layouts/Grid';

function ModalPage() {
  return (
    <div>
      <Grid>
        <Col>
          <Modal Button={ButtonShow} modalStyle={{ width: '500px' }}>
            <h2>hello</h2>
          </Modal>
        </Col>
        <Col>
          <Modal Button={ButtonShow} h='240px' w='400px'>
            <div className='d-flex flex-direction-column h-100 gap-12'>
              <p className='flex-1'>Bạn có muốn xóa sản phẩm</p>
              <div className='align-self-end '>
                <Button bg='var(--success)' className='mr-12'>
                  Save Change
                </Button>
                <Button bg='var(--danger)'>Cancel</Button>
              </div>
            </div>
          </Modal>
        </Col>
      </Grid>
    </div>
  );
}
const ButtonShow = ({ onShouldModal }) => (
  <Button ripple onClick={() => onShouldModal(true)}>
    Show Modal{' '}
  </Button>
);
export default ModalPage;
