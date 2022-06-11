import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { remove, getList } from '../../Services/FetchApi';
import { Card, Row, Col, Spinner, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

function CardsNotes() {
  const { allNotes, setAllNotes, setIdCard } = useContext(AppContext);

    function removeNote(value) {
      getList().then((data) => {
        if(data.statusCode !== 400) {
         setAllNotes(data);
        }
      });
      remove(value.id).then((data) => {
      });
    }

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
                <Card.Footer style={{textAlign: "end"}}>
                  <Button variant="primary" style={{backgroundColor: "transparent", border: "none"}} onClick={() => removeNote(value)}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" alt="lixo"/>
                  </Button>
                  <Link variant="primary" to="/Editar" onClick={() => setIdCard(value.id)}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png" alt="editar" />
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        ) : <Spinner animation="border" />}
      </>
    );
  }

export default CardsNotes;
