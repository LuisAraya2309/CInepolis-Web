import React,{Fragment} from 'react'
import { SignUpForm } from './SignUpForm'

export  function SignUp() {
  return (

      <Fragment>
        <header className="App-header">
            <div className='container mx-auto'>
                <div className="card bg-light w-100 mb-3" >                    
                    <div className="row g-0">
                        <div className="col-md">
                            <div className="card-body">
                                <h1 className="card-title text-center">¡Crea tu cuenta!</h1>
                                <br></br>
                                <SignUpForm />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </Fragment>
    
  )
}
