import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangMovieForm } from './MangMovieForm'

export function ManageMoviePage() {

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <h1 className='text-center'>Gestión de Peliculas</h1>
                <br/>
                <div className="row row-cols-1 row-cols-md-1">

                    <PrincipalCard props={{title:"Ingresar una pelicula",buttonTitle:"Agregar",redirectLink:"/CreateMovie"}} />

                    <MangMovieForm props={{title:"Consultar una pelicula",buttonTitle:"Consultar", action:"Consultar"}} />

                    <MangMovieForm props={{title:"Modificar una pelicula",buttonTitle:"Actualizar", action:"Actualizar"}} />

                    <MangMovieForm props={{title:"Eliminar una pelicula",buttonTitle:"Eliminar", action:"Eliminar"}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}