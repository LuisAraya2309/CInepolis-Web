import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangClientForm } from './MangClientForm'

export function ManageClientPage() {

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <h1 className='text-center'>Gestión de clientes</h1>
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