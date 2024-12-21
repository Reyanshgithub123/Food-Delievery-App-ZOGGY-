import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import MyOrder from './screens/MyOrder';
import {CartProvider} from './components/ContextReducer'
import Contactop from './screens/Contactop';
function App() {
  return (
    <CartProvider>
    <Router>
   <div>
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route exact path="/myorder" element={<MyOrder  />} />
          <Route exact path="/contact" element={<Contactop />} />
        </Routes>
    
   </div>
   </Router>
   </CartProvider>
  );
}

export default App;
