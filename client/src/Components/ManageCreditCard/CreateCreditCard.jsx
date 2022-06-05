import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {getDate} from "../GeneralResources/AuxiliarFunctions.js"

export  function CreateCreditCard() {

    const {register,handleSubmit} = useForm();
    const {state} = useLocation();
    const clientEmail = state.userLogged;
    
    const date = getDate();

    let navigate = useNavigate();

    const moveTo = () =>{
      let path = '/ManageCreditCard'
      navigate(path, {state:{userLogged:clientEmail}})
    }

    const onSubmit = async(data) =>{

        try{
            data.clientEmail = clientEmail
            console.log(data);
            axios.post('http://localhost:3001/creditCards/createCreditCard',data).then((response) => {
            })
            moveTo()
        }catch(err){
            alert(err)
        }
    }

  return (
      <Fragment>
        <header className="App-header">
            <div className='container mx-auto'>
                <div className="card bg-light w-100 mb-3" >                    
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-center">Ingresar un método de pago</h1>
                                <br></br>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Titular" aria-label="Titular" pattern = "^[A-Z]* [A-Z]* [A-Z]$" {...register('name',{required:true})}/>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" minLength="16" maxLength="16" placeholder="Numero de la tarjeta" pattern = "^([\d])+$" aria-label="Numero de la tarjeta " {...register('number',{required:true})}/>
                                        </div>

                                    </div>

                                    <br></br>
                                    <div className="row">

                                        <div className="col">
                                            <input type="date" className="form-control" placeholder="Fecha de vencimiento" aria-label="Fecha de vencimiento" min={date}  {...register('expiredDate',{required:true})}/>
                                        </div> 

                                        <div className="col">
                                            <input type="password" className="form-control" minLength="3" maxLength="3" pattern = "^([\d])+$" placeholder="Numero de seguridad" aria-label="Numero de seguridad" {...register('securityNumber',{required:true})}/>
                                        </div> 
                                    </div>

                                    <br></br>
                                    
                                    <center>
                                        <button type="submit" className="btn btn-dark text-center">Ingresar nuevo método</button>    
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
