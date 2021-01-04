import React, {Component} from 'react'
import Style from './MovieElement.module.scss'
import clsx from "clsx";

export default class MovieElement extends Component {
    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        const styleTitle = {
            color: '#3b3b3b'
        }
        return (
            <div onMouseEnter={this.mouseEnter} className={clsx("d-flex", Style.container)}>
                <img className={Style.imgList} alt="film" src={this.props.movie.img}/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5 style={styleTitle} > {this.props.movie.title} </h5>
                    <hr className="w-100"/>
                    <p>{this.props.movie.details}</p>
                </div>
            </div>
        );
    }
}
