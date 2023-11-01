import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Callback from './components/Callback';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/callback' element={<Callback />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
