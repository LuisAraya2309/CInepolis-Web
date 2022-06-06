import React, { Fragment } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"

export function ShoppingCards({props}) {

  const {register,handleSubmit} = useForm();
  const diccionaryTicket = {'seniorTickets':"Boletos de tercera edad",'middleTickets':"Boletos regulares",'childrenTickets':"Boletos para niños"}
  const prices = props.prices

  let navigate = useNavigate()
  const moveTo = (clientEmail) =>{
    let path = '/ShoppingCar'
    navigate(path,{state:{userLogged:clientEmail}})
  }

  const onSubmit = async(data) =>{

    try{
      const dataSnack = props.shoppingCarInfo.snacks
      dataSnack[props.title] = parseInt(data.number)
      const dataShopping = {'userLogged':props.shoppingCarInfo.clientEmail, 'snacks': dataSnack} 
      axios.post('http://localhost:3001/shoppingCar/updateSnacks',dataShopping ).then((response) => {})
      moveTo(dataShopping.userLogged)

    }catch(err){
      alert('Error al realizar la transacción')
    }
}

  return (
    <Fragment>
        <div className="col">
            <div className="card">
              <h5 className="card-title">{diccionaryTicket[props.title] ? diccionaryTicket[props.title] : props.title}</h5>
              <img src={props.type ? props.imgInfo[props.title]: props.imgInfo} className="card-img-top" alt = "..."width="300" height="300"/>
              <div className="card-body">
                <form id={props.title} onSubmit={handleSubmit(onSubmit)} >
                  <label htmlFor="text" className="form-label">Cantidad:</label>
                  <input type = "Number" id = {props.title} className="card-text" defaultValue = {props.bodyText} disabled = {props.type ? false: true } {...register('number', {required:true})}/>
                  <label htmlFor="text" className="form-label">Total: ₡{props.bodyText * prices[props.title]}</label>
                  <button type="submit" className= "btn btn-dark text-center" disabled = {props.type ? false: true } >Modificar información</button>   
                  <br></br>
                </form>
              </div>
            </div>
        </div>
    </Fragment>
  )
}



