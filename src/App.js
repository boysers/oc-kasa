import { Outlet, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './layouts';
import { About, Home, NotFound, Logement } from './pages';

function App() {
  const Layout = (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={Layout}>
        <Route index element={<Home />} />
        <Route path="logements/:id" element={<Logement />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
