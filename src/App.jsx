import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bemvindo from './pages/Bemvindo'; 
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* A tela que você fez agora será a inicial */}
        <Route path="/" element={<Bemvindo />} />
        
        {/* A próxima tela onde o usuário digita e-mail/senha */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}