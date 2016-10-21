var React = require("react");
import {Nav, Navbar  } from 'react-bootstrap';
var FormText = require("FormText");

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
        <FormText /> 
   </Navbar.Form>
   </Navbar>
</div>  
 );
  }
});


module.exports = NavBar;

/*https://github.com/react-bootstrap/react-bootstrap/issues/1850*/


