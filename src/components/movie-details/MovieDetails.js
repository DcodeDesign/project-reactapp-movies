import React from 'react'
import Style from './MovieDetails.module.scss'
import clsx from "clsx";

const Detail = ({desc}) => {
    return (
        <span>
            {desc}
        </span>
    );
}
export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDetail: false
        }
    }

    handleClickDisplayDetail = () => {
        this.setState({
            displayDetail: !this.state.displayDetail
        })
    }

    render() {
        // const detail = this.showDetail;
        let detail;
        if(this.state.displayDetail){
            detail = <Detail desc={this.props.movie.description}/>;
        } else {
            detail = '';
        }

        return (
            <div className={clsx("w-25 p-4 d-flex flex-column", Style.bgLight)}>
                <h5>{this.props.movie.title}</h5>
                <hr className={"w-100"}/>
                <div>
                    <img className={clsx("d-block mx-auto", Style.imgDetail)} src={this.props.movie.img} alt={""}/>
                </div>
                <hr className={"w-100"}/>
                <span className={"text-secondary"}>
                    {this.props.movie.details}
                </span>
                <button className={'btn btn-primary mt-2 mb-2'} onClick={this.handleClickDisplayDetail}> Voir le détail</button>
                { detail }
            </div>
        );
    }
}
