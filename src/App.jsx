import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Loguin from './pages/Loguin'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'
import AppNav from './components/AppNav';
import Container from 'react-bootstrap/Container';
import Loader from './components/Loader';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
 
  // SetUp del proyecto
  /*
  REACT ROUTER DOM
  NECESITO ROUTER ROUTES ROUTE  
  */
/*
REDUX
-> Crear carpetas Store
-> index.jsx -> representa el store
-> Sustitudir el codigo en el main.jsx
*/

  const isLoading = useSelector(state => state.isLoading)

  return (
      
    <HashRouter>
      <AppNav/>
      
      <Container>
       <Routes>
          <Route  path='/' element={<Home/>} /> 
          <Route  path='/loguin' element={<Loguin/>} />
          
          <Route  path='/product/:id' element={<ProductDetail/>} />
          <Route element = {<ProtectedRoutes/>} >
            <Route  path='/purchases' element={<Purchases/>} />
          </Route>
       </Routes>
      </Container>
      {isLoading && <Loader/>}
    </HashRouter>
    
  );
}
export default App;