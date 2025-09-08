import { BrowserRouter, Routes, Route } from "react-router";
import Listar from "./pages/listarAgenda";
import Cadastrar from "./pages/cadastrarAgenda"


export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listar />}/>
                <Route path="/Cadastrar" element={<Cadastrar />}/>
            </Routes>
        </BrowserRouter>
    )
}