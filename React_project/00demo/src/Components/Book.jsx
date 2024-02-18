//import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/bookDisplayStyle.css';

function Book() {
return(
  <Container className='bookDisplay'>
    <Card className='bookCard'>
    <Row>
      <Col>
      <img src="/ProjectAssets/SelfHelp/AtomicHabits.jpg" alt="" className='bookImg'/>
      </Col>
      <Col>
      <div>
        <h1>Title</h1>
        <h5>Author</h5>
        <p>There are many var=tructures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32etc.</p>
        
        <h3>Price: $200</h3>
        <Button variant="primary" className='bookBtn'>Add to Cart</Button>
      </div>
      </Col>
    </Row>
    </Card>
  </Container>
  );
}

export default Book;
