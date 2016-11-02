import React from 'react';
import NavBar from './NavBar.js';
import Content from './Content.js';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Main extends React.Component {
    render(){
        return(
        <div>
            <NavBar />
            <Content />
        </div>  
        );
    }
}

export default Main;
