import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import { About, Home, NotFound, Logement } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logements/:id" element={<Logement />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
