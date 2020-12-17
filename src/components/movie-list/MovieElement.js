import React, {Component} from 'react'

export default class MovieElement extends Component {
    mouseEnter =  () => {
      this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        const styleTitle = {
            color:'Green'
        }
        return (
            <div onMouseEnter={this.mouseEnter} className="w-50 p-2">
                <div className="border d-flex" style={{
                    color:"red"
                }}>
                    <img width="150" height="200" alt="film" src={this.props.movie.img} />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5 style={styleTitle}>{this.props.movie.title}</h5>
                        <hr className="w-100" />
                        <p>{this.props.movie.details}</p>
                    </div>
                </div>
            </div>
        );
    }
}
