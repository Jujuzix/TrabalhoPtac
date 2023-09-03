import {useState} from "react"
import './Todo.css'
import {Link} from "react-router-dom";
export default function Todo() {
    const [tenis, setTenis] = useState("")
    const [lista, setLista] = useState([]);
    const[numer, setNumer] = useState(24);
    const [id, setId] = useState(1);

    const salvar = (e) =>{
       e.preventDefault();
       setLista([...lista,{
        tenis: tenis,
        id:id,
        numer:numer
        
       }])
       setId(id+1);
       setTenis("");
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
    return (
        <div>
            <h1>Opções de Tenis</h1>
            <p>{tenis}</p>
            
            <div class="add">
            <form onSubmit={salvar}>
                <input value={tenis}
                onChange={(e)=>
                {setTenis(e.target.value)
                    
                }}/>
               
              <button>Adicionar</button>
            </form>
            </div>
             <p>Tenis</p>


            {lista.map((ativ)=> 
            <ul key={ativ.id}>
                <li>
                    <p>{ativ.tenis}</p>
                    <button onClick={() => remover(ativ.id)}>Remover</button>
                </li>
            </ul>
            )}
           

           

        </div>
        
    );
}