import React,{Fragment, useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function UpdateSession() {

    const {state} = useLocation()
    const sessionCode = state.sessionCode

    const {register,handleSubmit} = useForm();

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/movies/getMovies').then((response) => {
            setMoviesList(response.data)
        })
      },[]);

    const onSubmit = async(data) =>{
        try{
            const [year, month,day] = data.date.split('-').reverse();
            data.date = year+'-'+month+'-'+day
            data.sessionCode = sessionCode
            console.log(data)
            axios.post('http://localhost:3001/sessions/updateSession',data).then((response) => {

            })         
        } catch(err){
            alert('Se produjo un error')
        }
    }

  return (
    <Fragment>

        <header className="App-header">
                
            <div className='container mx-auto'>
                <h1 className='text-center'>Editar Sesiones</h1>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Sala" aria-label="Sala" {...register('room',{required:true})}/>
                    </div>
                    <div className="col">

                            <select className="form-select" defaultValue={'DEFAULT'} aria-label="Película" {...register('movie',{required:true})} >

                                {
                                    moviesList.map((movie)=>{
                                        return(
                                            <option value={movie.title}>{movie.title}</option>
                                        )                    
                                    })

                                }

                            </select>
                    </div>
                    <div className="col">
                        <input type="date" className="form-control" placeholder="Fecha de Sesión" aria-label="Fecha de nacimiento" min="2002-06-06" {...register('date',{required:true})}/>
                    </div>
                </div>

                <br></br>
                <div className="row">

                    <div className="col">
                        <input type="text" className="form-control" placeholder="Asientos" aria-label="Asientos" {...register('seats',{required:true})}/>
                    </div>

                    <div className="col">
                        <button type="submit" className="btn btn-dark text-center">Editar Sesión</button>
                    </div> 
                </div>

                <br></br>
            </form>
                
            </div>
                       
        </header>
    </Fragment>
  )
}
