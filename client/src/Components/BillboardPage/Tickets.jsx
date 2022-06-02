import React,{Fragment} from 'react'
import { useLocation } from 'react-router-dom';

export function Tickets() {

    const {state} = useLocation();
    const userLogged = state.user
    const sessionCode = state.code
    console.log(state)

  return (
    <Fragment>
        <header className="App-header">
                
            <div style={{ backgroundImage: 'url(require("./images/background.jpg"))' }}>
                <div className='container mx-auto'>
                        <h1>Tickets </h1>
                        <br />
                        <br />

                        <form>
                            <div className="row g-4">

                              <div class="col-auto">
                                <h2>Tercera Edad</h2>
                              </div>
                              

                              <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">-</button>
                              </div>

                              <div className="col-auto">
                                  <h2> 4</h2>
                              </div>

                              <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">+</button>
                              </div>

                            </div>
                            <br/>
                            <div className="row g-4">

                              <div class="col-auto">
                                <h2>General</h2>
                              </div>

                              <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">-</button>
                              </div>

                              <div className="col-auto">
                                  <h2> 4</h2>
                              </div>

                              <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">+</button>
                              </div>

                            </div>
                            <br/>
                            <div className="row g-4">

                              <div class="col-auto">
                                <h2>Menores</h2>
                              </div>

                              <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">-</button>
                              </div>

                              <div className="col-auto">
                                  <h2> 4</h2>
                              </div>

                              <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">+</button>
                              </div>

                            </div>
                            <br/>
                            <center>
                             <button type="submit" className="btn btn-primary mb-3">Continuar</button>
                            </center>
                            
                        </form>
                      
                        
                </div>
            </div>
                       
        </header>
    </Fragment>
  )
}
