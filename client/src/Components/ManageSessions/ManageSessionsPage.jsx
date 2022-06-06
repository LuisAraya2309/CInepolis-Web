import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { ManageSessionForm } from './ManageSessionForm'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function ManageSessionsPage() {
  const {state} = useLocation();
  const userLogged = state.user

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <div className='row'>
                  <div className='col-8'>
                    <h1 className='text-center'>Gestión de Sesiones de Películas</h1>
                  </div>
                  <div className='col-4'>
                    <Link to={'/AdminPage'} state={{userLogged:userLogged}} className="btn btn-danger">Volver</Link>
                  </div>
                </div>
                <br/>
                <div className="row row-cols-2 row-cols-md-2 g-4">
                    
                    <PrincipalCard props={{title:"Ingresar una sesión",buttonTitle:"Agregar",redirectLink:"/CreateSession"}} />

                    <ManageSessionForm props={{title:"Editar una sesión",buttonTitle:"Editar",action:"Update"}} />

                    <ManageSessionForm props={{title:"Eliminar una sesión",buttonTitle:"Eliminar",action:"Delete"}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}