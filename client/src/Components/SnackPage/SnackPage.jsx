import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { SnackCard } from './SnackCard';

export function SnackPage() {

  const [snacksList,setSnacksList] = useState([])
  const {state} = useLocation();
  const userLogged = state.userLogged
  

  useEffect(() => {
    axios.get('http://localhost:3001/snacks/getSnack').then((response) => {
        setSnacksList(response.data)
    })
  },[]);


  return (

    <Fragment>
        <header className="App-header">
            <div style={{ backgroundImage: 'url(require("./images/background.jpg"))' }}>
                <div className='container mx-auto'>
                        <div className='form-div'>
                            <h1 className ="display-1">Alimentos</h1>
                            <br/>
                          
                            <div className="row row-cols-2 row-cols-md-2 g-4">
                              {
                                snacksList.map((snackItem) =>{
                                var description = "Precio: " + snackItem.price
                                  return(
                                    <Fragment>
                                      <SnackCard props = {{description:description, image:snackItem.image, title:snackItem.name, redirectLink:'/BuySnack', params:userLogged, code:snackItem.name ,buttonTitle:'Comprar'}}/>
                                    </Fragment>
                                    
                                  )
                                  
                                })
                              }
                            
                             
                            
                            </div>                    
                        </div>
                </div>
            </div>
                       
        </header>
    </Fragment>
  
    )
}
