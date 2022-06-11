import React, { useContext, useState } from 'react';
import { update } from '../../Services/FetchApi';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";

import AppContext from '../../Context/AppContext';

function MyVerticallyCenteredModal(props) {
  const { addSubmitted } = useContext(AppContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {addSubmitted ? (
        <><Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Nota modificada
          </Modal.Title>
        </Modal.Header><Modal.Body>
            <p>
              Nota modificada com sucesso!
            </p>
          </Modal.Body></>
      ) : (
        <><Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Error
            </Modal.Title>
          </Modal.Header><Modal.Body>
              <p>
                confira se todos os campos foram inseridos!
              </p>
            </Modal.Body></>
      )}
      
    </Modal>
  );
}


function UpdateNota() {
  const { setAddSubmitted, nota, setNota, idCard } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);

  function handleNota({target}) {
    const { name, value } = target;
    setNota((prevState) => {
      return { ...prevState, [name]: value, };
    })
  }

  function submitInfos() {
    update(idCard, nota).then((data) => {
      if(data.statusCode === 400) {
        setAddSubmitted(false);
      } else {
        setAddSubmitted(true);
      }
    })
    setModalShow(true);
    setNota('')
    setAddSubmitted(false);
  }

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "40px", marginBottom: "20px"}}>
          <h1>Editar Notas</h1>
          <Link to="/">
            <Button variant="dark">
              Voltar
            </Button>
          </Link>
        </div>
      <Form>
            <Col  className="align-items-center">
              <Row style={{ marginBottom: "15px" }} sm='6' className="my-1" onChange={({ target }) => handleNota({ target })}>
                <Form.Label><strong>Texto</strong></Form.Label>
                <Form.Control placeholder="texto" name="text"/>
              </Row>
              <Row style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Cor de fundo</strong></Form.Label>
                <Form.Select aria-label="Default select example" onChange={({ target }) => handleNota({ target })} name='collor'>
                  <option value="primary">Azul</option>
                  <option value="secondary">Cinza</option>
                  <option value="success">Verde</option>
                  <option value="danger">Vermelho</option>
                  <option value="warning">Amarelo</option>
                  <option value="light">Branco</option>
                </Form.Select>
              </Row>
            </Col>
        <Button variant="dark" type="reset" onClick={submitInfos} style={{ alignSelf: "end", marginTop: "15px"}}>
          Salvar
        </Button>
      </Form>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default UpdateNota;