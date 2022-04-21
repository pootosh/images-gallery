import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const Search = ({word, setWord, handleSearchSubmit}) => {
    return(
        <Container className='mt-4 ml-5'>
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <Form onSubmit={handleSearchSubmit}>
                        <Row>
                            <Col xs={8}>
                                <Form.Control 
                                    type='text'
                                    value={word}
                                    onChange={(e) => setWord(e.target.value)}
                                    placeholder="Search" 
                                />
                            </Col>
                            <Col>
                                <Button variant="secondary" type="submit">Search</Button>{' '}
                            </Col>
                            
                        </Row>

                        
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;