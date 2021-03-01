import { useState, useEffect} from "react";
import style from '../styles/components/Header.module.css';




export function Gremio(){


const [equipes, setEquipes] = useState([]);
const [time, setTime] =  useState([]);



const getEquipes = async () => {

    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://futebol.homolog.groundsportech.com/samples/campeonatos/670/equipes.json')
        const json = await response.json()
        const dados = setEquipes(json.data)
        show(dados)
        show()
     } 
       catch (error) {
        console.log(error)
    }


}


const show = () => {

    for(let times of equipes)

    {
        if (times.nome === 'Grêmio')

        {
            
        setTime([times])
         

        }

 
    }

   
}




useEffect((() => {
    getEquipes();
    show();
   
  }), []);



  

    return (
        <div>

        <div>
        
    

            {time &&
             time.map((gremio) => <div className={style.HeaderContainer}>
              <p className={style.HeaderConteudo}> Bem vindos {gremio.torcedorNoPlural} ! <br>
              </br>
              </p>
              
               <p>
              O {gremio.nome} é de {gremio.cidade}, {gremio.estado} </p>
                
                <img src={gremio.urlLogo}  alt='Bandeira Grêmio' />

            </div>)}

    

        </div>   


          <ul>

            {
            equipes && equipes.map((equipe) =>
            <li key={equipe.id}> 
  
            {equipe.nome}

            </li>)}
    
          </ul>

    
        

           lalalal

           
            
            
        </div>
    )
            

    
            }
