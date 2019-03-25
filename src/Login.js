import React from "react"
import {Component} from "react"
import {Form, Button, Row, Col,Container} from "react-bootstrap"


class Login extends Component {
    render(){
        return(
        // <div className="Login">
        // <form>
            
           
        //     <input type="text" name = "username"/>  
        //     <input type = "text" name ="lastname"/> 

        //     <input type = "submit"/>  
        // </form>
        // Hello
        // </div>
        <Container>
 
  <Row>
    <Col></Col>
    <Col xs={5}>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Your email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">  
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Col>
    <Col></Col>
  </Row>
</Container>
   
        );
    }
}
export default Login;