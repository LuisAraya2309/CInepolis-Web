import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function SnackList({props}) {

    const {register,handleSubmit} = useForm();
    const [snackList,setSnackList] = useState([]);

    let navigate = useNavigate()
    const moveTo = (snackInfo) =>{
        let path 
        if(props.action === 'Eliminar'){
            path = "/"
        }else{
            path = "/"
        }

        navigate(path, {state:{snackInfo:snackInfo}})
    }
    
    useEffect(() => {
        axios.get('http://localhost:3001/snacks/getSnack').then((response) => {
            setSnackList(response.data)
        })
      },[]);


    const onSubmit = async(data) =>{
        try{
            if(props.action === 'Eliminar'){
                axios.post('http://localhost:3001/snacks/deleteSnackByName',data).then((response) => {
                moveTo(response.data)
                })
            }else{
                axios.post('http://localhost:3001/snacks/getSnackByName',data).then((response) => {
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
            <select className="form-select" defaultValue={'DEFAULT'} aria-label="AlimentosDisponibles" {...register('name',{required:true})}>
            <option value="DEFAULT" disabled>Alimentos disponibles</option>
            {snackList.map((snack) =>{
                return (
                        <option key={snack.name} value={snack.name}> {snack.name} </option>
                    );
            })}
            </select>
            <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
        </form>
    </Fragment>
  )
}
