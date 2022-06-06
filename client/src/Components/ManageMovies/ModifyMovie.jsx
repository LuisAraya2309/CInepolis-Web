import React,{Fragment} from 'react'
import { useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import {guardarArchivo} from "../GeneralResources/AuxiliarFunctions.js"

var imageInfo = []

export function ModifyMovie() {
    const {state} = useLocation();
    const movieInfo = state.movieInfo;
    const {register,handleSubmit} = useForm();

    let navigate = useNavigate()
    const moveTo = () =>{
        let path = "/ManageMovie"
        navigate(path)
    }

    const onSubmit = async(data) =>{
        try{
            let movieInforma = data
            movieInforma.image = "https://drive.google.com/uc?export=view&id=" + imageInfo[0] + "&rl"
            axios.post('http://localhost:3001/movies/updateMovieByName',movieInforma).then((response) => {
            })
            moveTo()
        }catch(err){
                alert('Movie invalido')
        }
    }

  return (
    <Fragment>
    <header className="App-header">
        <div className='container mx-auto'>
            <div className="card bg-light w-100 mb-3" >                    
                <div className="row g-0">
                    <div className="col-md-4">
                        <br></br>
                        <br></br>
                        <br></br>
                        <img src={movieInfo.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-center">Modificar una pelicula</h1>
                            <br></br>
                            <br></br>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Titulo</label>
                                        <input type="text" className="form-control" value = {movieInfo.title} readOnly aria-label="Titulo" {...register('title',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Director</label>
                                        <input type="text" className="form-control" defaultValue={movieInfo.director} aria-label="Director" {...register('director',{required:true})}/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Año de Publicación</label>
                                        <input type="text" className="form-control" defaultValue= {movieInfo.year} aria-label="Año de Publicación" {...register('year',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Duración</label>
                                        <input type="text" className="form-control" defaultValue={movieInfo.length} aria-label="Duración" {...register('length',{required:true})}/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Edad Requerida</label>
                                        <input type="text" className="form-control" defaultValue={movieInfo.requiredAge} aria-label="Edad Requerida" {...register('requiredAge',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Actores</label>
                                        <input type="text" className="form-control" defaultValue={movieInfo.actors} aria-label="Actores" {...register('actors',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Generos</label>
                                        <input type="text" className="form-control" defaultValue={movieInfo.genders} aria-label="Generos" {...register('genders',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Lenguajes</label>
                                        <input type="text" className="form-control" defaultValue={movieInfo.languages} aria-label="Lenguajes" {...register('languages',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">   
                                    <div className="col">
                                        <label className="form-label" htmlFor="customFile">Imagen del producto</label>
                                        <input type="file" accept="image/*" className="form-control" id="customFile" onChange={(e) => { guardarArchivo(e, imageInfo)}} />      
                                    </div>
                                </div>
                                <br></br>

                                <center>
                                    <button type="submit" className="btn btn-success text-center">Modificar Pelicula</button>  
                                </center>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </Fragment>
  )
}
