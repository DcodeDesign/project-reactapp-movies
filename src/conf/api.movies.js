import axios from 'axios';

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovies.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGVmZWNhNmVhN2Q1MGRkNDYxZjk2NDc1MmE3NmI1MyIsInN1YiI6IjVmZjM2ZDdlMjViOTU1MDAzZGZlNGI0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GFvUNDN05dnJ2KDFsP1wXcSKxF-yduiyBuvnUuErmxI';
    return req;
})

export default apiMovies;
