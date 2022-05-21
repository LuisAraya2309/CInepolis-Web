import React,{Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function UsersList({props}) {

  const {register, handleSubmit} = useForm();
  const [usersList,setUserList] = useState([]);

  let navigate = useNavigate()
  const moveTo = (userInformation) =>{
    let path
    (props.action === 1) ? (path = '/ModifyPage') : (path = '/AdminPage')
    navigate(path, {state:{userInfo:userInformation}})
  }
  
  const onSubmit = async(data) =>{
      try{
          if(props.action === 1){
            axios.post('http://localhost:3001/users/getUserByEmail',data).then((response) => {
            moveTo(response.data)
            })
          }else{
            axios.post('http://localhost:3001/users/deleteUserByEmail',data).then((response) => {
            moveTo(response.data)
            })
          } 
      } catch(err){
          alert('Se produjo un error')
      }
  }

    useEffect(() => {
        axios.get('http://localhost:3001/users/getUsers').then((response) => {
            setUserList(response.data)
        })
      },[]);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select className="form-select" defaultValue={'DEFAULT'} aria-label="Usuarios" {...register('email',{required:true})}>
          <option value="DEFAULT" disabled>Usuarios</option>
          {usersList.map((user) =>{
              return (
                  <option key={user.ID} value={user.id} > {user.email}</option>
                  
                  );
          })}
        </select>
        <input type="submit" className="btn btn-danger btn-block" value = {props.buttonTitle} />        
      </form>
    </Fragment>
  )
}
