import React, { useContext, useEffect } from 'react';
import "./Home.scss"
import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import { addMovies, fetchAsyncMoviesFunc, fetchAsyncShowsFunc } from '../../features/movies/moviesSlice';
import Nav from '../Nav/Nav';
import { AuthContext } from '../Authentication/Authentication';
import { Outlet } from 'react-router-dom';


const Home = () => {
    const contextDet = useContext(AuthContext);
    console.log("HomecontextDet====",contextDet)
    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAsyncMoviesFunc());
        dispatch(fetchAsyncShowsFunc())
    },[dispatch])
    return (
        <>        
            <div className='banner-img'></div>
            <MovieListing/>
            <Outlet/>
        </>
    );
};

export default Home;