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
                    
                    <PrincipalCard props={{title:"Ingresar un alimento",buttonTitle:"Agregar",redirectLink:"/CreateSnack"}} />

                    <MangSnackForm props={{title:"Modificar un alimento",buttonTitle:"Actualizar", action:"Actualizar"}} />

                    <MangSnackForm props={{title:"Eliminar un alimento",buttonTitle:"Eliminar", action:"Eliminar"}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}