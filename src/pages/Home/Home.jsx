import { Col } from "../../layouts/GridSystem";
import { Link } from "react-router-dom"
import styles from "./Home.module.css";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button"
import Accordion from "~/components/Accordion/Accordion";
function Home() {
  return (
    <>
        <Col>
          <div className={styles.box}>
            <Link to="/about">About page</Link>
          </div>
        </Col>
        <Col>
          <div className={styles.box}>1</div>
        </Col>
        <Col>
          <div className={styles.box}>1</div>
        </Col>
        <Col>
          <div className={styles.box}>1</div>
        </Col>
        <Col>
        <Button to="/about">Button</Button>
          <Modal Button={ButtonShow} modalStyle={{ width: "500px" }} >
          <h2>hello</h2>
          </Modal>
        </Col>
     <div>
          <Accordion title="click me">
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </Accordion>
          <Accordion title="click me">
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </Accordion>
          <Accordion title="click me">
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </Accordion>
     </div>
    </>
  )
}
const ButtonShow = ({ onShouldModal }) => (<button onClick={() => onShouldModal(true)}>Show Modal</button>)
export default Home