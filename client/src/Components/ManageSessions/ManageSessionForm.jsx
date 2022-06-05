import React, { Fragment} from 'react'
import { SessionsList } from '../GeneralResources/SessionsList'

export function ManageSessionForm({props}) {

    return (
        <Fragment>
            <div className="col">
                <div className="card border-primary text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <SessionsList props={{action:props.action, buttonTitle:props.buttonTitle}}/>
                    </div>                                                       
                </div>
            </div>
        </Fragment>
    )
}

