import React from 'react'
import { Link} from 'react-router-dom'


export  function DashCard({props}) {


    return (
        <div className="col">
            <div className="card  border-primary text-center h-100" >
                <div className="card" >
                    <img className="card-img-top" src={props.image} alt=""/>
                    <div className="card-body">
                    <p className="card-text">{props.title}</p>
                    <Link to={props.redirectLink} state={{userLogged:props.params}} className="btn btn-primary">{props.buttonTitle}</Link>
                    </div>
                </div>
            </div>
        </div>
    
  )
}