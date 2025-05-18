import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuizStart from './pages/QuizStart';
import ConnectionStatus from './pages/ConnectionStatus';



// …other pages

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/check" element={<ConnectionStatus />} />
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id/start" element={<QuizStart />} />
          {/* add /result, /my-attempts, /achievements here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
