import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import QuizStart from './pages/QuizStart';
import ConnectionStatus from './pages/ConnectionStatus';
import Register from './pages/Register';
import Login from './pages/Login';






// …other pages

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          <Route path="/check" element={<ConnectionStatus />} />
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id/start" element={<QuizStart />} />
          {/* add /result, /my-attempts, /achievements here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}