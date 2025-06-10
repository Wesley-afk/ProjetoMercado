const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from "react";

export function useInserirLivro(){
}

export function useDeletaLivro(){
    const deletarLivro = async (idLivro) => {
        const req = await fetch(`${url}/Livros/${idLivro}`, {
            method: "DELETE",
        });
        const res = req.json();
        return res;
    };
    return{ deletarLivro };
}

export function useListaLivros(){
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const req = await fetch(`${url}/livros`);
                const res = await req.json();
                setLivros(res);
            } catch(erro){
                console.log(erro);
            }
        }
        fetchData();
    }, []);

    return livros;
}