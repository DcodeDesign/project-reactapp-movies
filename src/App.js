import React from "react";
import style from './App.module.scss';
import {Loading, Header, MovieDetails, MovieList} from "./components";
import clsx from "clsx";
import apiMovies from './conf/api.movies';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            selectedMovie: 0,
            loaded:false
        }
        console.log(style);
        this.classes = style.myClassCss;
    }

    updateSelectedMovie = (index) => {
        this.setState({
            selectedMovie: index,
        })
    }

    componentWillMount() {
        apiMovies.get('/discover/movie')
            .then( r =>  r.data.results )
            .then( moviesApi => {
                const movies = moviesApi.map( m => ({
                    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
                    title: m.title,
                    details: `${ m.release_date } | ${ m.vote_average }/10 | ${ m.vote_count }  `,
                    description:  m.overview
                }))
                this.updateMovies(movies);
            })
            .catch( e => console.log(e));
    }

    updateMovies(movies) {
        this.setState({
            movies,
            loaded: true
        })
    }

    render() {
        return (
            <div className={style.container}>
                <div className="App d-flex flex-column">
                    <Header/>
                    { this.state.loaded ? (
                        <div className={clsx(this.classes, "d-flex flex-row flex-fill pt-4 p-4")}>
                            <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
                            <MovieDetails movie={this.state.movies[this.state.selectedMovie]}/>
                        </div>
                    ) : (<Loading />) }

                </div>
            </div>
        );
    };
}

