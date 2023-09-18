import {useState} from "react"
import './Todo.css'
import {Link} from "react-router-dom";
export default function Todo() {
    const [tenis, setTenis] = useState("")
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const[titulo, setTitu] = useState("");
    const[img,setImg] = useState("");

    const salvar = (e) =>{
       e.preventDefault();
       setLista([...lista,{
        tenis: tenis,
        id:id,
      titulo:titulo,
      img:img
        
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
            <h1 class="d">Opções de Tênis</h1>
            
            
            
            <div class="add">
            <form onSubmit={salvar}>
            <input placeholder="adicione a url da imagem desejada" type="text" value={img} onChange={(e)=>{setImg(e.target.value)}}/>
                <input value={tenis} onChange={(e)=>{setTenis(e.target.value) }}/>
                <input Value={titulo} onChange={(e)=>{setTitu(e.target.value) }}/>
              <button class="btn">Adicionar</button>
            </form>
            </div>
       
            
             


            {lista.map((ativ)=> 
            <ul key={ativ.id}>
                <li>
                <div>
                            <img class="img" src={ativ.img}/>
                        </div>
                    <p>{ativ.tenis}</p>
                    <p>{ativ.titulo}</p>
                    <button  onClick={() => remover(ativ.id)}>Remover</button>
                </li>
            </ul>
            )}
           

           

        </div>
        
    );
}