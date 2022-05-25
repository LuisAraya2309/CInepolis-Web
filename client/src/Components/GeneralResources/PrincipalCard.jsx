import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export function PrincipalCard({props}) {
  return (
    <Fragment>
        <div className="col">
            <div className="card border-primary text-center h-100">
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.body ? props.text : ""}</p>
                </div>                                
                <Link to={props.redirectLink} state={{userLogged:props.params}} className="btn btn-primary">{props.buttonTitle}</Link>                                
            </div>
        </div>
    </Fragment>
  )
}
