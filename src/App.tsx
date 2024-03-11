import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  AppWrapper,
  PageWrapper,
} from './styles'

// Header & Footer
import Header from './components/header';
import Footer from './components/footer';

// App Pages
import SimulationRoom from "./pages/simulation-room";
import Parametrization from './pages/parametrization';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWrapper>
          <PageWrapper>
            <Header />
            <Routes>
              <Route path="/" element={<SimulationRoom />} />
              <Route path="/parametrization" element={<Parametrization />} />
            </Routes>
            <Footer />
          </PageWrapper>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
