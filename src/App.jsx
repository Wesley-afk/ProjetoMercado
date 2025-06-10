import Container from "react-bootstrap/Container";

import BarraNavegacao from "./components/BarraNavegacao.jsx";

import { Outlet } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <BarraNavegacao />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
