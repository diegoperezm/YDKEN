var React = require("react");
var TextToolTip = require("TextToolTip");
import { Jumbotron, Grid, Col, Row } from 'react-bootstrap';

var Content = React.createClass({
    render: function() {
        return (
<div>            
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



        

module.exports = Content;