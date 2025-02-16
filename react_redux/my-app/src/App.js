import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { AuthProvider } from './components/Authentication/Authentication';
import PrivateRoute from './components/Authentication/PrivateRouter';


function App() {
  return (
    <div className='container'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<PrivateRoute element={<Home/>} />} />
            <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
            <Route element={<PageNotFound/>} />
            
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
