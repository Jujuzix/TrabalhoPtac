import { useEffect, useState } from "react" //Gerencia Estado
import './Todo.css'
import { Link } from "react-router-dom"; //Cria link para Navegação
export default function Todo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [tenis, setTenis] = useState("")
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [titulo, setTitu] = useState("");
    const [img, setImg] = useState("");
    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);
    //Estado


    //Salvar o formulário para a lista
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            tenis: tenis,
            id: id,
            titulo: titulo,
            img: img

        }])
        setId(id + 1);
        setTenis("");

    };

    //Função para remover opções 
    const remover = (id) => {
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }



    return (
        <div>
            <h1 class="d">Opções de Tênis</h1>



            <div class="add">
                <form onSubmit={salvar}>
                    <input placeholder="adicione a url da imagem desejada" type="text" value={img} onChange={(e) => { setImg(e.target.value) }} />
                    <input value={tenis} onChange={(e) => { setTenis(e.target.value) }} />
                    <input Value={titulo} onChange={(e) => { setTitu(e.target.value) }} />
                    <button class="btn">Adicionar</button>
                </form>
            </div>





            {/* Aparece Resultado da lista na Página */}
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <div>
                            <img class="img" src={ativ.img} />
                        </div>
                        <h3>{ativ.tenis}</h3>
                        <p>{ativ.titulo}</p>
                        {/* Botão que recebe da função para remover itens */}
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}




        </div>

    );
}