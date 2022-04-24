import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import data from './data.js';
function App() {
   let [shoes ,shoes변경 ] = useState(data);
  return (
    <div className="App">
 <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">coco-shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
      </Navbar>
      <div className="background">
        <div>
        <h1>
          20% Season off
        </h1>
        <p>asdopksadkwklrknkffkjaskfakflask'fdwpd</p>
         <Button variant="primary">Learn More</Button>{' '}
      </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h2>상품명</h2>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h2>상품명</h2>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h2>상품명</h2>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
//관리해야할 데이터가 너무 많을 땐 따로 js파일에 보관합니다. export default를 이용해서 데이터를 내보내고
//import를 이용해서 데이터를 받아옵니다. 그리고 React에서는 데이터를 받아올 때 같은 경로에 위치하고 있더라도 앞에 ./을 반드시 적어주어야 합니다.
//그리고 useState의 ()에 import 변수명 from 파일명에서 변수명을 넣어줍니다. 그렇게 하면 데이터가 많아도 여러 js파일에서 받아와 import할 수 있게 됩니다.