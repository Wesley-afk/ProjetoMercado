import React from 'react'
import Card from "react-bootstrap/Card"
import { useDeletaLivro } from '../hooks/useLivro'

const CardLivro = () => {
  const {deletarLivro} = useDeletaLivro()

  const handleDelete = async () => {

    const deletado = await deletarLivro(props.id)
    alert("livro deletado com sucesso")
    window.location.reload()
  }
  
  return (
    <div>
        <Card border="primary" style={{width:"18rem"}}>
            <Card.Body>
               <Card.Text>
                  <b>Título:</b> <br /> {props.titulo}
               </Card.Text>
               <Card.Text>
                  <b>Autor:</b> <br /> {props.autor}
               </Card.Text>
               <Card.Text>
                  <b>Gênero:</b> <br /> {props.genero}
               </Card.Text>
               <Card.Text>
                  <b>Dono:</b> <br /> {props.usuario}
               </Card.Text>
               <Button
                size="lg"
                variant="warning"
                type="button"
                href={`/editarlivro/${props.id}`}
                classname
                >
               </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default CardLivro