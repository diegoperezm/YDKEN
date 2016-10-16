var React = require("react");
var Data = require("Data");
import { Nav, Navbar, NavItem, FormGroup, FormControl , Button,  Jumbotron } from 'react-bootstrap';



var Main = React.createClass({
    render: function(){
        return (
        <div>
        <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
{/*      <NavItem eventKey={1} href="#">Link</NavItem> */}
{/*      <NavItem eventKey={2} href="#">Link</NavItem> */}
    </Nav>
    <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
{/* why? -->  {' '}      */}
        <Button type="submit">Search</Button>
      </Navbar.Form>
  </Navbar>
      <Jumbotron><Data /></Jumbotron>
       </div>    
    );
  }
});


module.exports = Main;