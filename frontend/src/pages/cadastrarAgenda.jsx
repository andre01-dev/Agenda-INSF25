import { useState } from 'react';
import api from '../api.js'
import './cadastrarAgenda.scss'

export default function Cadastrar() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [data, setData] = useState('')

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
      <button onClick={criar}>Criar</button>
      <br />
    </div>
  )
}