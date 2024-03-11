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

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWrapper>
          <PageWrapper>
            <Header />
            <Routes>
              <Route path="/" element={<SimulationRoom />} />
            </Routes>
          </PageWrapper>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
