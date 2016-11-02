import React from 'react';
import  {Navbar}   from 'react-bootstrap';
import FormText from './FormText.js';

class NavBar extends React.Component {
    render(){
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">YDKEN</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Form pullRight>
                        <FormText  /> 
                    </Navbar.Form>
                </Navbar>
            </div>
        );
    }
}


export default NavBar;

/*https://github.com/react-bootstrap/react-bootstrap/issues/1850*/
