import React from "react"
import {Component} from "react"
import {Form, Button, Row, Col,Container,Image,Figure} from "react-bootstrap"

class CashRegister extends Component {
    render(){
    return(
 
        <Container>
       <p><img src="https://via.placeholder.com/128" alt="ladybird" />Cash Register</p>
 
        <Row>
          <Col xs={12} md={12}><div style={{height: "200px"}}></div></Col>
          <Col xs={6} md={4}>
            <Image src="https://via.placeholder.com/128" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://via.placeholder.com/128" rounded />
          </Col>
        </Row>
      </Container>
    );

    }
}
export default CashRegister;