import React, { useContext, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { getList } from '../../Services/FetchApi';
import AppContext from '../../Context/AppContext';
import CardNotes from '../../Components/CardsNotes/CardsNotes';
import { Link } from "react-router-dom";

function Home() {
  const { setAllNotes } = useContext(AppContext);

  useEffect(() => {
     getList().then((data) => {
       if(data.statusCode !== 400) {
        setAllNotes(data);
       }
     });
   }, [setAllNotes])

  
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "40px", marginBottom: "20px"}}>
          <h1>Minhas Notas</h1>
          <Link to="/Adicionar">
            <Button variant="dark">
              Adicionar Naver
            </Button>
          </Link>
        </div>
      <CardNotes />
    </Container>
  )
}

export default Home;