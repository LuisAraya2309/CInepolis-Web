import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangClientForm } from './MangClientForm'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function ManageClientPage() {
  const {state} = useLocation();
  const userLogged = state.user

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <div className='row'>
                  <div className='col-8'>
                    <h1 className='text-center'>Gestión de clientes</h1>
                  </div>
                  <div className='col-4'>
                    <Link to={'/AdminPage'} state={{userLogged:userLogged}} className="btn btn-danger">Volver</Link>
                  </div>
                </div>
                <br/>
                <div className="row row-cols-3 row-cols-md-3 g-3">
                    
                    <PrincipalCard props={{title:"Agregar un cliente",buttonTitle:"Agregar",redirectLink:"/CreateClient"}} />

                    <MangClientForm props={{title:"Modificar un cliente",buttonTitle:"Actualizar", action:"Actualizar"}} />

                    <MangClientForm props={{title:"Eliminar un cliente",buttonTitle:"Eliminar", action:"Eliminar"}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}