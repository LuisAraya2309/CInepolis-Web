import React,{useState, Fragment} from 'react'
import {useNavigate} from "react-router-dom"

export function TicketsQty({props}) {

  const [seniorTickets, setSeniorTickets] = useState(0)
  const [middleTickets, setMiddleTickets] = useState(0)
  const [childrenTickets, setChildrenTickets] = useState(0)

  let navigate = useNavigate()
  const moveToSelectTickets = (totalTickets) => {
      
      navigate('/TicketSelection',{state:{totalTickets: totalTickets, sessionCode: props.sessionCode}})
  }

  const continueShopping = () => {

    const totalTickets = {
        seniorTickets: seniorTickets,
        middleTickets: middleTickets,
        childrenTickets : childrenTickets,
        totalQty : seniorTickets + middleTickets + childrenTickets
    }
    moveToSelectTickets(totalTickets)

    
  }

  return (

        <Fragment>
        <div className="row g-4">

            <div className="col-auto">
            <h2>Tercera Edad</h2>
            </div>
            

            <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick = {() => seniorTickets>0 ? setSeniorTickets(seniorTickets-1) : setSeniorTickets(0)}>-</button>
            </div>

            <div className="col-auto">
                <h2>{seniorTickets}</h2>
            </div>

            <div className="col-auto">
                <button className="btn btn-primary mb-3" onClick={() => setSeniorTickets(seniorTickets + 1)}>+</button>
            </div>

        </div>
        <br/>
        <div className="row g-4">

            <div className="col-auto">
            <h2>General</h2>
            </div>

            <div className="col-auto">
            <button  className="btn btn-primary mb-3" onClick = {() => middleTickets>0 ? setMiddleTickets(middleTickets-1) : setMiddleTickets(0)}>-</button>
            </div>

            <div className="col-auto">
                <h2> {middleTickets}</h2>
            </div>

            <div className="col-auto">
            <button  className="btn btn-primary mb-3" onClick={() => setMiddleTickets(middleTickets + 1)}>+</button>
            </div>

        </div>
        <br/>
        <div className="row g-4">

            <div className="col-auto">
            <h2>Menores</h2>
            </div>

            <div className="col-auto">
            <button  className="btn btn-primary mb-3" onClick = {() => childrenTickets>0 ? setChildrenTickets(childrenTickets-1) : setChildrenTickets(0)}>-</button>
            </div>

            <div className="col-auto">
                <h2>{childrenTickets}</h2>
            </div>

            <div className="col-auto">
            <button  className="btn btn-primary mb-3" onClick={() => setChildrenTickets(childrenTickets + 1)}>+</button>
            </div>

        </div>
        <br/>
        <center>
            <button  className="btn btn-primary mb-3" onClick = {continueShopping}>Continuar</button>
        </center>
        </Fragment>
    
  )

}
