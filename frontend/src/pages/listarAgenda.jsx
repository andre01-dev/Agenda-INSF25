import { useState, useEffect } from 'react';
import api from '../api.js';
import { Link } from 'react-router';
import './listarAgenda.scss';

export default function Listar() {
  const [Agenda, setAgenda] = useState([]);

  async function listar() {
    const resposta = await api.get('/eventos');
    setAgenda(resposta.data);
  }

  useEffect(() => {
    listar();
  }, []);

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

      <Link to={"/Cadastrar"}>
        <h2>Cadastro</h2>
      </Link>

      <br />

       

      <div className="container-listar-agenda">
        <div className="cabecalho-eventos">
             <h3 className="contador-eventos">Total de eventos: {Agenda.length}</h3>
        </div>
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

      
      <footer className='rodape'>
        <div className="footer-conteudo">
          <div className="footer-coluna logo-coluna">
            <img src="/public/agenda.webp" alt="Agenda Logo" className="footer-logo" />
            <span>AGENDA</span>
          </div>

          <div className="footer-coluna">
            <h4>Contato</h4>
            <p>(11) 91234-5678</p>
            <p>agenda@frei.com.br</p>
          </div>

          <div className="footer-coluna">
            <h4>Desenvolvido por</h4>
            <p>Caio Sousa Mello</p>
            <p>André Guilherme Sjydlovski</p>
          </div>

          <div className="footer-coluna">
            <h4>Turma</h4>
            <p>Informática A</p>
          </div>
        </div>

        <div className="footer-frei">
          <p>2025 © Instituto Nossa Senhora de Fátima</p>
        </div>
      </footer>
    </div>
  );
}