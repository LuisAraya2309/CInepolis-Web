import React, { Fragment} from 'react'
import { SnackList } from '../GeneralResources/SnackList';

export function MangSnackForm({props}) {

    return (
        <Fragment>
            <div className="col">
                <div className="card border-danger text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <SnackList props={{action:props.action, buttonTitle:props.buttonTitle}} />
                    </div>                                                       
                </div>
            </div>
        </Fragment>
    )
}

