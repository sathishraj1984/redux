import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {movieApi} from '../../common/apis/MovieApiKey';
import {APIKey} from "../../common/apis/movieApi";

export const fetchAsyncMoviesFunc = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((error)=> {
        console.log("Error:", Error)
    });
    console.log("The response from Api", response);
    return response.data;
    
});

export const fetchAsyncShowsFunc = createAsyncThunk("movies/fetchAsyncShows", async () => {
    const movieText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=series`)
    .catch((error)=> {
        console.log("Error:", Error)
    });
    console.log("The response from Api", response);
    return response.data;
    
});


export const fetchAsyncDetailsFunc = createAsyncThunk("movies/fetchAsyncDetails", async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    .catch((error)=> {
        console.log("Error:", Error)
    });
    console.log("The response from Api", response);
    return response.data;
    
});

const initialState = {
    movies: {},
    shows: {},
    details: {},
    loading: false,
    error: null
}

const moveieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            console.log("payload=====", payload)
            state.movies = payload;
        },
        removeSelectedDetails: (state) => {
            state.details = {};
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncMoviesFunc.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchAsyncMoviesFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        })
        .addCase(fetchAsyncMoviesFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(fetchAsyncShowsFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.shows = action.payload;
        })
        .addCase(fetchAsyncDetailsFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.details = action.payload;
        })
    }
});

export const { addMovies, removeSelectedDetails } = moveieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetails = (state) => state.movies.details;
export default moveieSlice.reducer;