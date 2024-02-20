import './App.css';
import './pages/page.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Menu from './pages/Menu';
import Track from './pages/Track';
import Login from './pages/Login';
import Dashboard from './admin/pages/Dashboard';
import Cart from './pages/Cart';
import Adminsignup from './admin/components/Adminsignup';
import Adminhome from './admin/pages/Adminhome';
import Adminmenu from './admin/pages/Adminmenu';
import Admindeal from './admin/pages/Admindeal';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={ <><Nav/><Home /><Footer /></>} />
        <Route path="/aboutus" element={ <><Nav/><About/><Footer /></> } />
        <Route path="/Exploremenu" element={ <><Nav/><Menu/><Footer /></> } />
        <Route path="/trackmenu" element={ <><Nav/><Track/></> } />
        <Route path="/login" element={ <><Nav/><Login/></> } />
        <Route path="/cart" element={ <><Nav/><Cart/></> } />
        {/* admin pannel */}
        <Route path="/admin" element={ <Dashboard/> } />
        <Route path="/adminsignup" element={ <Adminsignup/> } />
        <Route path="/adminhome" element={ <Adminhome/> } />

        <Route path="/adminmenu" element={<> <Adminmenu/> </>} />
        <Route path="/admindeal" element={<> <Admindeal/> </>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;