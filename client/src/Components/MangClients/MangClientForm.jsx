import React, { Fragment} from 'react'
import { ClientList } from '../GeneralResources/ClientList';

export function MangClientForm({props}) {

    return (
        <Fragment>
            <div className="col">
                <div className="card border-danger text-center h-100">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.body ? props.text : ""}</p>
                        <ClientList props={{action:props.action, buttonTitle:props.buttonTitle}} />
                    </div>                                                       
                </div>
            </div>
        </Fragment>
    )
}