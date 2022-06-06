import React from 'react'
import { Link } from 'react-router-dom'


export function SnackCard({props}) {
  return (
    <div className="col">
            <div className="card  border-primary text-center h-100" >
                <div className="card" >
                    <img className="card-img-top" style={{width: 300, height: 300}} src={props.image} alt=""/>
                    <div className="card-body">
                    <h1>{props.title}</h1>
                    <p className="card-text">{props.description}</p>
                    <Link to={props.redirectLink} state={{userLogged:props.params, snackName:props.title, snackImage:props.image, snackDescription:props.description}} className="btn btn-primary">{props.buttonTitle}</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}
