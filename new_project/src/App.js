import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './ContentWrapper/Home';
import Edit from './ContentWrapper/User/Edit';
import List from './ContentWrapper/User/List';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Counter from './ContentWrapper/Counter';
import CounterRx from './ContentWrapper/CounterRx';
import CustomPage from './ContentWrapper/CustomPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="/user/list" element={<List />} />
          <Route path="/user/edit" element={<Edit />}/>
          <Route path="/user/counter" element={<Counter />}/>
          <Route path="/user/counterRx" element={<CounterRx />}/>
          <Route path="/CustomPage" element={<CustomPage initialCount={0} />}/>
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
