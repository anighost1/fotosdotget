import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Callback from './components/Callback';
import Profile from './pages/Profile';


function App() {

    const location = useLocation()
    
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/callback' element={<Callback />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            {location.pathname !== '/profile' && (
                <Footer />
            )}
        </>
    );
}

export default App;
