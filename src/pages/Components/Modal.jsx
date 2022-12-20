import React from 'react';
import Button from '~/components/Atom/Button/Button';
import ClickAnimate from '~/components/Atom/CickAnimate/ClickAnimate';
import Modal from '~/components/Atom/Modal/Modal';
import { Col, Grid } from '~/layouts/Comp/GridSystem';

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
          <Modal Button={ButtonShow} h="240px" w="400px">
            <div className="d-flex flex-direction-column h-100 gap-12">
              <p className="flex-1">Bạn có muốn xóa sản phẩm</p>
              <div className="align-self-end ">
                <Button bg="var(--text-success)" className="mr-12">
                  Save Change
                </Button>
                <Button bg="var(--text-danger)">Cancel</Button>
              </div>
            </div>
          </Modal>
        </Col>
      </Grid>
    </div>
  );
}
const ButtonShow = ({ onShouldModal }) => (
  <ClickAnimate >
    <Button onClick={() => onShouldModal(true)}>Show Modal </Button>
  </ClickAnimate>
);
export default ModalPage;
