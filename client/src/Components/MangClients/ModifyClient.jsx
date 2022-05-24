import React,{Fragment} from 'react'
import { useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'

export function ModifyClient() {

    const {state} = useLocation();
    const clientInfo = state.clientInfo;
    const {register,handleSubmit} = useForm();

    let navigate = useNavigate()
    const moveTo = () =>{
        let path = "/ManageClient"
        navigate(path)
    }

    const onSubmit = async(data) =>{

        try{
            axios.post('http://localhost:3001/snacks/updateSnackByName',data).then((response) => {
            })
            moveTo()
        }catch(err){
                alert('Cliente invalido')
        }
    }

  return (
      <Fragment>
        <header className="App-header">
            <div className='container mx-auto'>
                <div className="card bg-light w-100 mb-3" >                    
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={""} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-center">Modificar un cliente</h1>
                                <br></br>
                                
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row">

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" value = {clientInfo.name} {...register('name',{required:true})}/>
                                        </div>
                                        
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Apellido1</label>
                                            <input type="text" className="form-control" value = {clientInfo.lastname1} {...register('lastname1',{required:true})}/>                                        
                                        </div>

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Apellido2</label>
                                            <input type="text" className="form-control" value = {clientInfo.lastname2} {...register('lastname2',{required:true})}/>                                        
                                        </div>

                                    </div>
                                    <br></br>

                                    <div className="row">

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Correo electrónico</label>
                                            <input type="text" className="form-control" placeholder = {clientInfo.email} {...register('email',{required:true})}/>        
                                        </div>

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Contraseña</label>
                                            <input type="text" className="form-control" placeholder = {clientInfo.password} {...register('password',{required:true})}/>        
                                        </div>

                                    </div>
                                    <br></br>

                                    <div className="row">

                                        <div className="col"> 
                                            <label htmlFor="text" className="form-label">Esquema de vacunación</label>
                                            <select className="form-select" defaultValue={'DEFAULT'} aria-label="Esquema de vacunación" {...register('vaccines',{required:true})} >
                                                <option value="DEFAULT" disabled>Esquema de vacunación</option>
                                                <option key= "1" value="1" >Primera dosis</option>
                                                <option key= "2" value="2" >Segunda dosis</option>
                                                <option key= "3" value="3" >Tercera dosis o más</option>

                                            </select>
                                        </div>

                                        <div className="col"> 
                                            <label htmlFor="text" className="form-label">Adjuntar comprobante</label>
                                            <input type="file" accept="application/pdf" className="form-control" id="customFile" onChange={(e) => guardarArchivo(e)} />
                                                    
                                        </div>
                                    </div>

                                    <center>
                                
                                        <button type="submit" className= "btn btn-dark text-center" >Modificar información</button>    
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
