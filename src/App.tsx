import './index.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import NavBar from './components/navbar';
import HowWorks from './pages/HowWorks';
import Benefits from './pages/Benefits';

export default function App() {

  return (
    <div>
      <NavBar />
      <Header />
      <HowWorks />
      <Benefits />
      <Footer />
    </div>
  )
}