import React, { Fragment } from 'react'
import { DashCard } from '../GeneralResources/DashCard';
import { useLocation } from 'react-router-dom';
import starImage from "../../images/star.png"
import popcornImage from "../../images/popcorn.png"
import shoppingCarImage from "../../images/shoppingCar.png"
import signOutImage from "../../images/signOut.png"

export function ClientPage() {
  const {state} = useLocation();
  const userLogged = state.user

  return (
    <Fragment>
        <header className="App-header">
                
                <div style={{ backgroundImage: 'url(require("./images/background.jpg"))' }}>
                    <div className='container mx-auto'>
                    <br/>
                        <h1 className='text-center'>¡Bienvenido!</h1>
                        <br/>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            
                            <DashCard props={{title:"Cartelera", image:starImage,redirectLink:"/Billboard",params:userLogged,buttonTitle:"Consultar"}} />
    
                            <DashCard props={{title:"Dulcería", image:popcornImage,redirectLink:"/",params:userLogged,buttonTitle:"Consultar"}} />                            
    
                            <DashCard props={{title:"Carrito de Compras", image:shoppingCarImage,redirectLink:"/",params:userLogged,buttonTitle:"Consultar"}} />
                           
                            <DashCard props={{title:"Cerrar Sesión", image:signOutImage,redirectLink:"/",params:userLogged,buttonTitle:"Consultar"}} />
                        </div>
                                                
                    </div>
                </div>
                           
            </header>
    </Fragment>
  )
}
