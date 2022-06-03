import React,{Fragment,useState} from 'react'
import { useLocation } from 'react-router-dom';
import { TicketsQty } from './TicketsQty';

export function Tickets() {
    
    const {state} = useLocation();
    const sessionCode = state.sessionCode;
    
  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.jpg"))' }}>
                <div className='container mx-auto'>
                        <h1>Tickets </h1>
                        <br />
                        <br />

                        <TicketsQty props={{userLogged:"josuegupi@gmail.com", sessionCode:sessionCode}}/>

                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
