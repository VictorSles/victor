import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Produtos from './Pages/Produtos'
import Contato from './Pages/Contato'
function ReactRouter() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Produtos'>Produtos</Link>
                </li>
                <li>
                    <Link to='/Contato'>Contato</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Produtos" element={<Produtos />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>
        </Router>
    )
}
export default ReactRouter 