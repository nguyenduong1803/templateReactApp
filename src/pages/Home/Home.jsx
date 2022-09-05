import { Col } from "../../layouts/GridSystem";
import { Link } from "react-router-dom"
import styles from "./Home.module.css";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button"
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
          <Modal Button={ButtonShow} modalStyle={{ width: "500px" }} />
        </Col>
    </>
  )
}
const ButtonShow = ({ onShouldModal }) => (<button onClick={() => onShouldModal(true)}>Show Modal</button>)
export default Home