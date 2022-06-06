import React,{useState, Fragment} from 'react'
import {useNavigate} from "react-router-dom"
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export function BuySnack() {
  const [snackQuantity, setSnackQuantity] = useState(0)

  const {state} = useLocation();
  const userLogged = state.userLogged
  const snackName = state.snackName
  const snackImage = state.snackImage
  const snackDescription = state.snackDescription

  return (
        <Fragment>
        <header className="App-header">  
            <div style={{ backgroundImage: 'url(require("./images/background.jpg"))' }}>
                <div className='container mx-auto'>
                        <div className='form-div'>
                            <h1 className ="display-1">Compra de Alimentos</h1>
                            <br/>
                            <div className="col">
                                <div className="card  border-primary text-center h-100" >
                                    <div className="card" >
                                        <img className="card-img-top" style={{width: 300, height: 300}} src={snackImage} alt=""/>
                                        <div className="card-body">
                                        <h1>{snackName}</h1>
                                        <p className="card-text">{snackDescription}</p>
                                        <br/>

                                        <div className="row g-4">

                                            <div className="col-auto">
                                            <h2>Cantidad de Boletos</h2>
                                            </div>
                                            <div className="col-auto">
                                            <button className="btn btn-primary mb-3" onClick = {() => snackQuantity>0 ? setSnackQuantity(snackQuantity-1) : setSnackQuantity(0)}>-</button>
                                            </div>
                                            <div className="col-auto">
                                                <h2>{snackQuantity}</h2>
                                            </div>
                                            <div className="col-auto">
                                                <button className="btn btn-primary mb-3" onClick={() => setSnackQuantity(snackQuantity + 1)}>+</button>
                                            </div>

                                        </div>
                                        <br />
                                        <center>
                                            <button className="btn btn-primary mb-3" onClick={()=>{
                                                axios.post('http://localhost:3001/shoppingCar/getSnacks',{userLogged: userLogged} ).then((response) => {
                                                    let oldSnack = response.data.snacks
                                                    let newSnack = {}
                                                    newSnack[snackName] = snackQuantity
                                                    let snacks
                                                    if (oldSnack === undefined){
                                                        snacks = newSnack; 
                                                    } else {
                                                        snacks = Object.assign(oldSnack, newSnack); 
                                                    }

                                                    axios.post('http://localhost:3001/shoppingCar/addNewSnack',{userLogged: userLogged,snacks:snacks, snackName:snackName} ).then((response) => {
                                                        console.log(response.data)
                                                    })
                                                    alert('Se ingreso el alimento al carrito exitosamente')
                                                    window.history.back();
                                                })   
                                            }} >Añadir al carrito</button>   
                                        </center>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
                        
        </header>
        


        
       
        </Fragment>
    
  )

}
