import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Row, Col, Spinner} from 'react-bootstrap';

function CardsNotes() {
  const { allNotes } = useContext(AppContext);

    return (
      <>
        {allNotes.length > 0 ? (
          <Row xs={1} md={5} className="g-2">
          {allNotes.map((value, index) => (
            <Col key={index}>
              <Card bg={value.collor} text={value.collor === 'light' ? 'dark' : 'white'}>
                <Card.Body>
                  <Card.Title>{value.note}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        ) : <Spinner animation="border" />}
      </>
    );
  }

export default CardsNotes;
