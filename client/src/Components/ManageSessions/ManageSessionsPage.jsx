import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { ManageSessionForm } from './ManageSessionForm'

export function ManageSessionsPage() {

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <h1 className='text-center'>Gestión de Sesiones de Películas</h1>
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