import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'

export function ManageSessionsPage() {

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <h1 className='text-center'>Gestión de alimentos</h1>
                <br/>
                <div className="row row-cols-2 row-cols-md-2 g-4">
                    
                    <PrincipalCard props={{title:"Ingresar un alimento",buttonTitle:"Agregar",redirectLink:"/CreateSnack"}} />

                    <PrincipalCard props={{title:"Ingresar un alimento",buttonTitle:"Agregar",redirectLink:"/CreateSnack"}} />

                    <PrincipalCard props={{title:"Ingresar un alimento",buttonTitle:"Agregar",redirectLink:"/CreateSnack"}} />

                    <PrincipalCard props={{title:"Ingresar un alimento",buttonTitle:"Agregar",redirectLink:"/CreateSnack"}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}