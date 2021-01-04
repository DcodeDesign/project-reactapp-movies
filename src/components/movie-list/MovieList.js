import React, {Component} from 'react'
import {MovieElement} from "../index";
import Style from './MovieList.module.scss';

export default class MovieList extends Component {

    render() {
        let count = this.props.movies.length;
        return (
            <>
                <div className={Style.count}> {count} : films Trouvés</div>
                <div className={"w-75 d-flex flex-row flex-wrap align-content-start"}>
                    {this.props.movies.map((m, index) => (
                        <MovieElement key={m.title + index} movie={m} updateSelectedMovie={() => {
                            this.props.updateSelectedMovie(index)
                        }}/>
                    ))
                    }
                </div>
            </>
        );
    }
}
