var React = require("react");
var Audio = require("Audio");
import { Nav, Navbar, NavItem, FormGroup, FormControl } from 'react-bootstrap';

var NavBar = React.createClass({
    render: function(){
        return (
<div>
        <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">YDKEN</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
{/*      <NavItem eventKey={1} href="#">Link</NavItem> */}
{/*      <NavItem eventKey={2} href="#">Link</NavItem> */}
    </Nav>
    <Navbar.Form pullRight>
      {/*  <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
          {' '}  {/* why? -->  {' '}      */}
    {/*    <Button type="submit">Search</Button> */}
        <Audio />
      </Navbar.Form>
  </Navbar>
</div>  
 );
  }
});


module.exports = NavBar;