import { createBrowserRouter } from "react-router-dom";
import CadastraUsuario from "./pages/CadastraUsuario";
import CadastraLivro from "./Pages/CadastraLivro";
import EditarLivro from "./Pages/EditarLivro";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      // {
      //   path: "/cadastrausuario",
      //   element: <CadastroUsuario />,
      // },
      // {
      //   path: "/cadastralivro",
      //   element: <CadastroLivro />,
      // },
      {
        path: "/editalivro/:id",
        element: <EditarLivro />,
      },
    ],
  },
]);

export default router;