var React = require("react");
var NavBar = require("NavBar");
var TextToolTip = require("TextToolTip");
import { Jumbotron, Grid, Col, Row } from 'react-bootstrap';


var Main = React.createClass({
    render: function(){
        return (
<div>
    <NavBar />
        <Grid>
            <Row>
                <Col xs={12}>
                    <Jumbotron>
                        <TextToolTip />
                    </Jumbotron>
                </Col>
            </Row>
        </Grid>
</div>    
    );
  }
});


module.exports = Main;