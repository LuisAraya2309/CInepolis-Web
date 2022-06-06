import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangSnackForm } from './MangSnackForm'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function ManageSnackPage() {
  const {state} = useLocation();
  const userLogged = state.user

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <div className='row'>
                  <div className='col-8'>
                    <h1 className='text-center'>Gestión de alimentos</h1>
                  </div>
                  <div className='col-4'>
                    <Link to={'/AdminPage'} state={{userLogged:userLogged}} className="btn btn-danger">Volver</Link>
                  </div>
                </div>
                <br/>
                <div className="row row-cols-2 row-cols-md-2 g-4">
                    
                    <PrincipalCard props={{title:"Ingresar un alimento",buttonTitle:"Agregar",redirectLink:"/CreateSnack"}} />

                    <MangSnackForm props={{title:"Modificar un alimento",buttonTitle:"Actualizar", action:"Actualizar"}} />

                    <MangSnackForm props={{title:"Eliminar un alimento",buttonTitle:"Eliminar", action:"Eliminar"}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}