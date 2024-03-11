import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  AppWrapper,
  PageWrapper,
} from './styles'

/* components */
import Header from './components/header';

/* pages */
import SimulationRoom from "./pages/simulation-room";
import Footer from './components/footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<SimulationRoom />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
    </>
  );
}

export default App;
