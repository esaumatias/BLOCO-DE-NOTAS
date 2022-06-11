import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { create, getList } from '../../Services/FetchApi';
import AppContext from '../../Context/AppContext';

function Home() {
  const { setNota, nota } = useContext(AppContext);
  const [allNotes, setAllNotes] = useState({});

  useEffect(() => {
     getList().then((data) => {
       if(data.statusCode !== 400) {
        setAllNotes(data);
       }
     });
   }, [])

  function handleNota({target}) {
    const { value } = target;
    setNota(value);
  }

  function submitInfos() {
    create(nota).then((data) => {
      console.log(data);
    })
  }
  
  return (
    <Container>
      <h1>Minhas notas</h1>
      <Form onChange={({ target }) => handleNota({ target })}>
            <Row  className="align-items-center">
              <Col style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Adicionar Notas</strong></Form.Label>
                <Form.Control placeholder="Nome" name="name"/>
              </Col>
            </Row>
        <Button variant="dark" onClick={submitInfos} style={{ alignSelf: "end", marginTop: "15px"}}>
          Salvar
        </Button>
      </Form>
    </Container>
  )
}

export default Home;