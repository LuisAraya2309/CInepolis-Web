import React,{Fragment,useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { ShoppingCards } from '../GeneralResources/ShoppingCards'
import ticketsImg from "../../images/tickets.png"
import {getSnacks} from "./AuxiliarFunctionsShoppingCar.js"
import {getCheckOutInfo} from "./AuxiliarFunctionsShoppingCar.js"
import {useLocation} from "react-router-dom"

var snackResult = [];
var snackImgList = [];

export function ShoppingCar() {

    const {state} = useLocation();
    const clientEmail = state.userLogged;

    const [shoppingCar,setShoppingCar] = useState([]);
    const [ticketList,setTicketList] = useState([]);
    const [snacksList,setSnacksList] = useState([]);
    
    getSnacks(snackResult,snackImgList); 

    const snacksImg = snackImgList[0];

    const snacksPrices = snackResult[0];
    const ticketsPrices = {'seniorTickets': 2500 , 'middleTickets' : 3200, 'childrenTickets' : 2500}

    var ticketsCt; var snacksCt;

    let navigate = useNavigate()
    const moveTo = (clientInfo) =>{
        let path 
        path = "/ClientPage"
        navigate(path, {state:{user:clientEmail}})
    }
    
    useEffect(() => {
        axios.post('http://localhost:3001/shoppingCar/getShoppingCarByEmail',{clientEmail:clientEmail}).then((response) => {
            setShoppingCar(response.data)
            setTicketList(Object.keys(response.data.boughtTickets))
            setSnacksList(Object.keys(response.data.snacks))

        })
        // eslint-disable-next-line
      },[]);


    function checkout() {
        try{
            getCheckOutInfo({clientEmail:'josuegupi@gmail.com'},ticketsPrices,snacksPrices)
            axios.post('http://localhost:3001/shoppingCar/deleteShoppingCar',{clientEmail:clientEmail}).then((response) => {})
            axios.post('http://localhost:3001/shoppingCar/insertShoppingCar',{clientEmail:clientEmail}).then((response) => {})
            moveTo()
            
        } catch(err){
            alert('Se produjo un error')
        }
    }

  return (
    <Fragment>
        <header className="App-header">               
            <div className='container mx-auto'>
                <h1 className='text-center'>Carrito de compras</h1>
                <br/>
                <div className="row row-cols-3 row-cols-md-3 g-4">
                    {   // eslint-disable-next-line
                        ticketList.map((tickets) =>{
                            ticketsCt = parseInt(shoppingCar.boughtTickets[tickets])
                            if(ticketsCt>0){
                                return (
                                    <ShoppingCards props={{title:tickets.toString(),bodyText:ticketsCt, imgInfo: ticketsImg, shoppingCarInfo:shoppingCar, prices: ticketsPrices}} />
                                        
                                    );  
                            }
                        })        
                    }
                    {
                        // eslint-disable-next-line
                        snacksList.map((snacks) =>{
                            snacksCt = parseInt(shoppingCar.snacks[snacks])
                            if(snacksCt>0){
                                return (
                                    <ShoppingCards props={{title:snacks.toString(),bodyText:snacksCt,type:"snack",imgInfo: snacksImg, shoppingCarInfo:shoppingCar, prices: snacksPrices}} />
                                        
                                    ); 
                            }
                        })
                    }
                </div> 
            <br></br>
            <button className= "btn btn-dark text-center" disabled = {false} onClick = {()=>{checkout()}} >Finalizar compra</button >
            <br></br>
            </div> 
        </header>
    </Fragment>
  )
}
