import React,{Fragment} from 'react'
import { useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import {guardarArchivo} from "../GeneralResources/AuxiliarFunctions.js"

var imageInfo = []

export function FindMovie() {
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
                            <h1 className="card-title text-center">Consultar pelicula</h1>
                            <br></br>
                            <br></br>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Titulo</label>
                                        <input type="text" className="form-control" value = {movieInfo.title} aria-label="Titulo" readOnly {...register('title',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Director</label>
                                        <input type="text" className="form-control" value={movieInfo.director} aria-label="Director" readOnly {...register('director',{required:true})}/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Año de Publicación</label>
                                        <input type="text" className="form-control" value= {movieInfo.year} aria-label="Año de Publicación" readOnly {...register('year',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Duración</label>
                                        <input type="text" className="form-control" value={movieInfo.length} aria-label="Duración" readOnly {...register('length',{required:true})}/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Edad Requerida</label>
                                        <input type="text" className="form-control" value={movieInfo.requiredAge} aria-label="Edad Requerida" readOnly {...register('requiredAge',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Actores</label>
                                        <input type="text" className="form-control" value={movieInfo.actors} aria-label="Actores" readOnly {...register('actors',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Generos</label>
                                        <input type="text" className="form-control" value={movieInfo.genders} aria-label="Generos" readOnly {...register('genders',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text" className="form-label">Lenguajes</label>
                                        <input type="text" className="form-control" value={movieInfo.languages} aria-label="Lenguajes" readOnly {...register('languages',{required:true})}/>
                                    </div>
                                </div>
                                <br></br>

                                <center>
                                    <button type="submit" className="btn btn-success text-center">Regresar</button>  
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
