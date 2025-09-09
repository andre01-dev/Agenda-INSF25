import { useState } from 'react';
import api from '../api.js'
import './cadastrarAgenda.scss'

export default function Cadastrar() {
  const [titulo, setTitulo] = useState('Evento x')
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
    <div>
      <h1>Agenda!</h1>

      <label>Titulo</label>
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <br />
      <label>Descricao</label>
      <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <br />
      <label>Data</label>
      <input type='date' value={data} onChange={(e) => setData(e.target.value)} />
      <br />
      <button onClick={excluir}>Excluir</button>
      <br />
      <button onClick={criar}>Salvar</button>
      <br />

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

   
  )
}