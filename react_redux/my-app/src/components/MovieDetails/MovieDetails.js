import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDetailsFunc, getDetails, removeSelectedDetails } from '../../features/movies/moviesSlice';
import "./MovieDetails.scss"

const MovieDetails = () => {
    console.log("getDetails====", getDetails);
    
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getDetails);
    console.log("data====", data);
    useEffect(() => {
        const getReturn = dispatch(fetchAsyncDetailsFunc(imdbID));
        return () => {
            dispatch(removeSelectedDetails())
        }
    }, [dispatch, imdbID])
    //
    
    return (
        <div className='movie-section'>
        {Object.keys(data).length ===0 ? (<div>...Loading</div>) :
            (<>
            <div className='section-left'>
                <div className='movie-title'>
                    {data.Title}
                </div>
                <div className='movie-rating'>
                    <span>IMDB Rating <i className='fa fa-star'></i>: {data.imdbRating}</span>
                    <span>IMDB Votes <i className='fa fa-thumbs-up'></i>: {data.imdbVotes}</span>
                    <span>IMDB Runtime <i className='fa fa-flim'></i>: {data.RunTime}</span>
                    <span>IMDB Year <i className='fa fa-calender'></i>: {data.Year}</span>
                </div>
                <div className='movie-plot'>{data.Plot}</div>
                <div className='movie-info'>{data.Info}</div>
            </div>
            <div className='section-right'>
                <div className='movie-img'>
                    <img src={data.Poster} alt={data.Title} />
                </div>
            </div>
            </>)
            }
        </div>
        
    );
};

export default MovieDetails;