import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangSnackForm } from './MangSnackForm'

export function ManageSnackPage() {

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <h1 className='text-center'>Gestión de alimentos</h1>
                <br/>
                <div className="row row-cols-2 row-cols-md-2 g-4">
                    
                    <PrincipalCard props={{title:"Agregar un parqueo",buttonTitle:"Agregar",redirectLink:"/CreateParking"}} />

                    <MangSnackForm props={{title:"Consultar un parqueo",buttonTitle:"Consultar", action:"Consultar"}} />

                    <MangSnackForm props={{title:"Modificar información",buttonTitle:"Actualizar", action:"Actualizar"}} />

                    <MangSnackForm props={{title:"Eliminar un parqueo",buttonTitle:"Eliminar", action:"Eliminar"}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}