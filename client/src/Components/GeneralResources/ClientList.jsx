import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function ClientList({props}) {

    const {register,handleSubmit} = useForm();
    const [clientList,setClientList] = useState([]);

    let navigate = useNavigate()
    const moveTo = (clientInfo) =>{
        let path 
        if(props.action === 'Eliminar'){
            path = "/ManageClient"
        }else{
            path = "/ModifyClient"
        }

        navigate(path, {state:{clientInfo:clientInfo}})
    }
    
    useEffect(() => {
        axios.get('http://localhost:3001/users/getUsers').then((response) => {
            setClientList(response.data)
        })
      },[]);


    const onSubmit = async(data) =>{
        try{
            if(props.action === 'Eliminar'){
                axios.post('http://localhost:3001/users/deleteUserByEmail',data).then((response) => {
                moveTo(response.data)
                })
            }else{
                axios.post('http://localhost:3001/users/getUserByEmail',data).then((response) => {
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
            <select className="form-select" defaultValue={'DEFAULT'} aria-label="ClientesRegistrados" {...register('email',{required:true})}>
            <option value="DEFAULT" disabled>Clientes registrados</option>
            {clientList.map((client) =>{
                return (
                        <option key={client.email} value={client.email}> {client.name +" "+ client.lastname1 +" "+ client.lastname2} </option>
                        
                    );        
            })}
            </select>
            <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
        </form>
    </Fragment>
  )
}
