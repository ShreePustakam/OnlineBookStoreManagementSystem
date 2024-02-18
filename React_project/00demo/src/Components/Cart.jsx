import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/cartStyle.css';

function Cart(){
  return <Container className='yourCart'>
    <h1>Your Cart</h1>
    <Row className='cart-rows'>
      <Col>
      <img src="/ProjectAssets/SelfHelp/AtomicHabits.jpg" alt="" />
      </Col>

      <Col>
      <h3>Book Title</h3>
      </Col>

      <Col className='btn-remove'>
      <Button variant='danger'>Remove</Button>
      </Col>
    </Row>

    <Row className='cart-rows'>
      <Col>
      <img src="/ProjectAssets/SelfHelp/AtomicHabits.jpg" alt="" />
      </Col>

      <Col>
      <h3>Book Title</h3>
      </Col>
    </Row>

    <Row className='btn-buy'>
    <Button variant='primary'>Buy Now</Button>
    </Row>
    
  </Container>
}

export default Cart;
