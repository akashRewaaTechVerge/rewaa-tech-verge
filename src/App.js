
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Career, Main } from './Pages';
import { Footer, Navbar } from './components';
import { BackToTop } from './components';
import Whatsapp from './components/Whatsapp/Whatsapp';



function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Career" element={<Career />}></Route>
          <Route path="/" />
        </Routes>
      <Footer/>
      </Router>
      <Whatsapp/>
      <BackToTop />
    </>
  );
}

export default App;
