import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function MoviesList({props}) {

    const {register,handleSubmit} = useForm();
    const [moviesList,setMoviesList] = useState([]);

    let navigate = useNavigate()
    const moveTo = (movieInfo) =>{
        let path 
        if(props.action === 'Consultar'){
            path = "/FindMovie"
        }
        if(props.action === 'Actualizar'){
            path = "/ModifyMovie"
        }
        if(props.action === 'Eliminar'){
            path = "/ManageMovie"
        }

        navigate(path, {state:{movieInfo:movieInfo}})
    }
    
    useEffect(() => {
        axios.get('http://localhost:3001/movies/getMovies').then((response) => {
            setMoviesList(response.data)
        })
      },[]);


    const onSubmit = async(data) =>{
        try{
            if(props.action === 'Actualizar'){
                axios.post('http://localhost:3001/movies/getMovieByName',data).then((response) => {
                moveTo(response.data)
                })
            }
            if(props.action === 'Consultar'){
                axios.post('http://localhost:3001/movies/getMovieByName',data).then((response) => {
                moveTo(response.data)
                })
            }
            if(props.action === 'Eliminar'){
                axios.post('http://localhost:3001/movies/deleteMovie',data).then((response) => {
                moveTo(response.data)
                })
            }  
            
        } catch(err){
            alert('Se produjo un error')
        }
    }

  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <select className="form-select" defaultValue={'DEFAULT'} aria-label="Peliculas Disponibles" {...register('title',{required:true})}>
            <option value="DEFAULT" disabled>Peliculas Disponibles</option>
            {moviesList.map((movie) =>{
                return (
                        <option key={movie.title} value={movie.title}> {movie.title} </option>
                    );
            })}
            </select>
            <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
        </form>
    </Fragment>
  )
}
