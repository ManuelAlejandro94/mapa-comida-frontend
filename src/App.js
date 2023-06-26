import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import RegisterPage from './pages/RegisterPage';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
