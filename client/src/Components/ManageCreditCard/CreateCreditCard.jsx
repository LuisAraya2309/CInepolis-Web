import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"

export  function CreateCreditCard() {

    const {register,handleSubmit} = useForm();
    const {state} = useLocation();
    const clientId = state.userLogged;

    let navigate = useNavigate()
    const moveTo = () =>{
      let path = '/ManageCreditCard'
      navigate(path)
    }

    const onSubmit = async(data) =>{

        try{
            data.clientId = clientId
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
                                            <input type="text" className="form-control" placeholder="Titular" aria-label="Titular" {...register('name',{required:true})}/>
                                        </div>
                                        <div className="col">
                                            <input type="number" className="form-control" placeholder="Numero de la tarjeta" aria-label="Numero de la tarjeta " {...register('number',{required:true})}/>
                                        </div>

                                    </div>

                                    <br></br>
                                    <div className="row">

                                        <div className="col">
                                            <input type="date" className="form-control" placeholder="Fecha de vencimiento" aria-label="Fecha de vencimiento" min="2000-01-02" {...register('expiredDate',{required:true})}/>
                                        </div> 

                                        <div className="col">
                                            <input type="password" className="form-control" placeholder="Numero de seguridad" aria-label="Numero de seguridad" {...register('securityNumber',{required:true})}/>
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
