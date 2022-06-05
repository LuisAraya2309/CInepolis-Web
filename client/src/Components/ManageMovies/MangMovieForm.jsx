import React, { Fragment} from 'react'
import { MoviesList } from '../GeneralResources/MoviesList';

export function MangMovieForm({props}) {

    return (
        <Fragment>
            <div className="col mt-5">
                <div className="card border-primary text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <MoviesList props={{action:props.action, buttonTitle:props.buttonTitle}} />
                    </div>                                                       
                </div>
            </div>
        </Fragment>
    )
}

