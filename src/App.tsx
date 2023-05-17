import './stile/stile.css';
import Cabeçalho from './component/header';  
import Rodapé from './component/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';  
import About from './pages/about';
import NotFound from './pages/notfound';
import ClassX from './pages/classx';
import Exp from './pages/exp';
import Rolld from './pages/rolld';
import Contador from './pages/contador';


function App() {
    
return (
  <div>
      <Routes>
      <Route path="/" element={< Home /> } />
      <Route path= "/About" element= {< About /> } />
      <Route path = "/ClassX" element = {< ClassX />} />
      <Route path = "/Exp" element = {< Exp />} />
      <Route path = "/Rolld" element = {< Rolld />} />
      <Route path = "*" element = {< NotFound />} />
      <Route path = "/Contador" element = {< Contador />} />
      </Routes> 
  </div>
    )
  }

export default App;
