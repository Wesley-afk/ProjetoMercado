import Nav from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const BarraNavegacao = () => {
    return(
        <div>
            {" "}
            <Navbar expand="lg" bg="success" data-bs-theme="dark">
                <Container>
                    <NavBar.Brand href="/home">
                        C&G BIBLIOTECA
                    </NavBar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/cadastrausuario">
                            Cadastra Usuário
                        </Nav.Link>
                        <Nav.Link href="/cadastralivro">
                            Cadastra livros
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}