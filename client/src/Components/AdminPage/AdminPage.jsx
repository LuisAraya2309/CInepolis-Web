import React, { Fragment } from 'react'
import { Link} from 'react-router-dom'
import { DashCard } from '../GeneralResources/DashCard';
import { useLocation } from 'react-router-dom';
import cameraCinema from "../../images/CamaraCine.png"
import popCorn from "../../images/popcorn.png"
import cinema from "../../images/cinema.png"
import clientIcon from "../../images/clientIcon.png"
import signOutImage from "../../images/signOut.png"

export function AdminPage() {
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
                            
                            <DashCard props={{title:"Gestionar Peliculas", image:cameraCinema,redirectLink:"/ManageMovie",params:userLogged,buttonTitle:"Gestionar"}} />
    
                            <DashCard props={{title:"Gestionar Clientes", image:clientIcon,redirectLink:"/ManageClient",params:userLogged,buttonTitle:"Gestionar"}} />                            
    
                            <DashCard props={{title:"Gestionar Cartelera", image:cinema,redirectLink:"/ManageSessions",params:userLogged,buttonTitle:"Gestionar"}} />
                           
                            <DashCard props={{title:"Gestionar Alimentos", image:popCorn,redirectLink:"/ManageSnack",params:userLogged,buttonTitle:"Gestionar"}} />

                            <DashCard props={{title:"Cerrar Sesión", image:signOutImage,redirectLink:"/",params:userLogged,buttonTitle:"Cerrar Sesión"}} />
                        </div>
                                                
                    </div>
                </div>
                           
            </header>
    </Fragment>
  )
}
