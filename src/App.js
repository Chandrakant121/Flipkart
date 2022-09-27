import Header from './components/header/Header';
import './App.css';
import Home from "./components/home/Home"
import Box from '@mui/material/Box';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/details/Details';
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Box>

      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
