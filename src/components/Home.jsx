import React, { Component } from 'react'
import "bootstrap/dist/css/"
import { Container, Row } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6}>
                        <h1>Welcome to Spectackles!</h1>
                        <p className="Lead">All the books in one website!</p>
                        <hr className="my-2" />
                        <p>Explore the world of knowledge, there's never not enough reading</p>
                </Col>
                </Row>
                
            </Container>
        )
    }
};

export default Home;