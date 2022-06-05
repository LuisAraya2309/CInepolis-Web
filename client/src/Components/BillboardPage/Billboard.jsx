import React, { Fragment } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { SessionCard } from './SessionCard';

export function Billboard() {

  const [sessionsList,setSessionsList] = useState([])
  const {state} = useLocation();
  const userLogged = state.userLogged
  

  useEffect(() => {
    //const today = new Date();
    //const todaysDate = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
    const todaysDate = '25-05-2022'
    axios.post('http://localhost:3001/sessions/getSessions',{todaysDate}).then((response) => {
        setSessionsList(response.data)
    })
  },[]);


  return (

    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.jpg"))' }}>
                <div className='container mx-auto'>
                        <div className='form-div'>
                            <h1 className ="display-1">Cartelera</h1>
                            <br/>
                          
                            <div className="row row-cols-1 row-cols-md-4 g-4" >
                              {
                                sessionsList.map((session) =>{
                                  var sessionBody = "Hora: "+ session.hour +"\n" + "Sala: " + session.room + "\n";
                                  var sessionCode = session.room + "-"+session.hour
                                  return(
                                    <Fragment>
                                      <SessionCard key= {session.movie} props = {{description:sessionBody,image : session.movieImage, title : session.movie,redirectLink:'/Tickets',params : userLogged, code : sessionCode ,buttonTitle:'Comprar'}}/>
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

//<div className="row row-cols-1 row-cols-md-4 g-4" >
//<div className={rowConfig}></div>