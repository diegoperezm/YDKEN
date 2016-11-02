import React from 'react';
import TextToolTip from './TextToolTip.js';
import { Jumbotron, Grid, Col, Row } from 'react-bootstrap';

class Content extends React.Component {
    render(){
        return(
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
}

export default Content;
