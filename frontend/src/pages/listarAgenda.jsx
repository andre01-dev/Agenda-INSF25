import { useState } from 'react';
import api from '../api.js'
import { Link } from 'react-router';
import './listarAgenda.scss'

export default function Listar (){

    const [Agenda, setAgenda] = useState([])
 
    async function listar() {
        await api.get('/eventos')
        .then(resposta => setAgenda(resposta.data));
    }

    return (
        <div className='container'>
            <div className='cabecalho'>
                <img className='logo' src="/public/agenda.webp" alt="" height={60} />
                <h1>Agenda Frei</h1>
                <div className='navegacao'>
                    <h2>Início</h2>
                    <h2>Cadastro</h2>
                </div>
            </div>
            <div className='linha'></div>

            <h1>Total de Eventos:</h1>
           
           <Link to = {"/Cadastrar"}>
            <h2>Cadastro</h2>
           </Link>
  
            <br />
            <button onClick={listar}>butao</button>
            <br />
            <br />

            <h3>Total de eventos: {Agenda.length}</h3>

            {
                Agenda.map(evento => {

                return <div className="container-listar-agenda">
                    <div className="lista-cartao">
                        {Agenda.map(evento => (
                        <div className="cartao" key={evento.id}>
                            <h1>{evento.titulo}</h1>
                            <h4>{evento.descricao}</h4>
                            <div className='data'>
                            <p>{new Date(evento.dataevento).toLocaleDateString('pt-BR')}</p>
                            <img src="/public/calendario.png" height='22px' width='22px' />
                                 </div>
                        </div>
                        ))}
                    </div>
                    </div>
                })
            }

            <div className='rodape'>
                
            </div>

        </div>
        
    );
}