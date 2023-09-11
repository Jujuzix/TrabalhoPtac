import {useState} from "react"
import './Todo.css'
import {Link} from "react-router-dom";
export default function Todo() {
    const [tenis, setTenis] = useState("")
    const [lista, setLista] = useState([]);
    const[cor, setCor] = useState("");
    const [id, setId] = useState(1);

    const salvar = (e) =>{
       e.preventDefault();
       setLista([...lista,{
        tenis: tenis,
        id:id,
        cor:cor
        
       }])
       setId(id+1);
       setTenis("");
       setCor("");
    };
    const remover = (id) => {
        const auxLista = [];
        lista.map((lista) => {
            if(lista.id !== id){
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }

    const adicionar = (cor) => {
        const auxLista = [];
        lista.map((lista) => {
            if(lista.cor !== id){
                auxLista.push(lista);
            }
        })
    }
    return (
        <div>
            <h1 class="d">Opções de Tênis</h1>
            
            <p>{tenis}</p>
            
            <div class="add">
            <form onSubmit={salvar}>
                <input value={tenis}
                onChange={(e)=>
                {setTenis(e.target.value)
                    
                }}/>
               
              <button class="btn">Adicionar</button>
            </form>
            </div>
        <h1>Ten</h1>
            
             


            {lista.map((ativ)=> 
            <ul key={ativ.id}>
                <li>
                    <p>{ativ.tenis}</p>
                    <button  onClick={() => remover(ativ.id)}>Remover</button>
                </li>
            </ul>
            )}
           

           

        </div>
        
    );
}