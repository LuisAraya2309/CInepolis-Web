import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { MangMovieForm } from './MangMovieForm'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function ManageMoviePage() {
  const {state} = useLocation();
  const userLogged = state.user

  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <div className='row'>
                  <div className='col-8'>
                    <h1 className='text-center'>Gestión de Peliculas</h1>
                  </div>
                  <div className='col-4'>
                    <Link to={'/AdminPage'} state={{userLogged:userLogged}} className="btn btn-danger">Volver</Link>
                  </div>
                </div>
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