import { useState } from 'react';
import api from '../api.js'
import './cadastrarAgenda.scss'
import { Link } from 'react-router';

export default function Cadastrar() {
  const [titulo, setTitulo] = useState('Evento')
  const [descricao, setDescricao] = useState('Descrição do evento ')

  const hoje = new Date().toISOString().split("T")[0];
  const [data, setData] = useState(hoje)

  async function criar() {
    try {
      await api.post('/eventos', {
        titulo,
        descricao,
        data_do_evento: data   // ou "dataevento", se mudar no backend
      })
      alert('Evento criado')
    } catch (e) {
      alert(e.response?.data?.erro || 'Erro ao criar evento')
    }
  }
  async function excluir() {

  }

  return (
    <div className='container-cadastrar'>
      <div className='cabecalho'>
        <img className='logo' src="/public/agenda.webp" alt="" height={50} />
        <h1>Agenda Frei</h1>
        <div className='navegacao'>
          <Link to={"/"}>
          <h2 className='link'>Início</h2>
          </Link>
          <Link to={"/Cadastrar"}>
            <h2 className='link'>Cadastro</h2>
          </Link>
        </div>
      </div>
      <div className='linha'></div>

      <div className='body'>
        <div className='inputs'>
          <label>Titulo</label>
          <input className='estilo-input' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          <br />
          <label>Descricao</label>
          <input className='estilo-input' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          <br />
          <label>Data</label>
          <input className='estilo-input' type='date' value={data} onChange={(e) => setData(e.target.value)} />
          <br />
          <div className='botoes'>
          <button className='botao' onClick={excluir}>Excluir</button>
          <br />
          <button className='botao' onClick={criar}>Salvar</button>
          <br />
          </div>
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
            <p>André Guilherme O. Sjydlovski</p>
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


  )
}