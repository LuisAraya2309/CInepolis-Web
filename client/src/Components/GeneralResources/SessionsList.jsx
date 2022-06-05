import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function SessionsList({props}) {

    const {register,handleSubmit} = useForm();
    const [sessionsList,setSessionsList] = useState([]);

    let navigate = useNavigate()
    const moveTo = (sessionInfo) =>{
        let path 
        if(props.action === 'Delete'){
            path = "/ManageSessions"
            alert('Sesion Eliminada con exito')
        }else{
            path = "/UpdateSession"
        }

        navigate(path, {state:{sessionCode:sessionInfo}})
    }
    
    useEffect(() => {
        axios.get('http://localhost:3001/sessions/getAllSessions').then((response) => {
            setSessionsList(response.data)
        })
      },[]);


    const onSubmit = async(data) =>{
        try{
            if(props.action === 'Delete'){
                axios.post('http://localhost:3001/sessions/deleteSessionByName',data).then((response) => {
                    moveTo(response.data)
                })
            }else{ // then is update
                moveTo(data)
              } 
            
        } catch(err){
            alert('Se produjo un error')
        }
    }

  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <select className="form-select" defaultValue={'DEFAULT'} aria-label="SesionesDisponibles" {...register('sessionCode',{required:true})}>
            <option value="DEFAULT" disabled>Sesiones disponibles</option>
            {sessionsList.map((session) =>{
                return (
                        <option key={session.room} value={session.room + '-' + session.hour}> {session.movie + ' ' + session.hour + ' Sala ' + session.room} </option>
                    );
            })}
            </select>
            <input type="submit" className="btn btn-primary btn-block" value = {props.buttonTitle} />        
        </form>
    </Fragment>
  )
}
