import React,{Fragment, useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import seatsLayout from '../../images/seatsLayout.png'
import axios from 'axios';
import { useForm } from 'react-hook-form';




export function TicketSelection() {

    const rowOptions = ['A','B','C','D','E','F']
    const seatOptions = ['1','2','3','4','5','6','7','8','9','10']
    const {state} = useLocation();
    const totalTickets = state.totalTickets
    const sessionCode = state.sessionCode
    const userLogged = state.userLogged
    const [selectedSeats, setSelectedSeats] = useState("");
    const [occupiedSeats, setOccupiedSeats] = useState([])
    const [seatsLeft, setSeatsLeft] = useState(totalTickets.totalQty)

    const {register,handleSubmit} = useForm();

    useEffect(() => {
        axios.post('http://localhost:3001/sessions/getSessionByCode',{sessionCode:sessionCode}).then((response) => {
            setOccupiedSeats(response.data)
        })
      },[]);

    const onSubmit = async(data) =>{
        try{
            if(seatsLeft > 0){
                var seatSelected = data.row + data.seat;
                if(occupiedSeats.includes(seatSelected)){
                    alert('El asiento ya está ocupado')
                }else{
                    setSeatsLeft(seatsLeft -1)
                    setSelectedSeats(selectedSeats + " " + seatSelected)
                    occupiedSeats.push(seatSelected)
                    
                }
            }else{
                alert('Ya ha seleccionado la cantidad de asientos máxima')
            }
            

        } catch(err){
            alert('Opción inválida')
        }
        
    
    }   

  return (
    <Fragment>
        <header className="App-header">
                
                <div style={{ backgroundImage: 'url(require("./images/background.jpg"))' }}>
                    <div className='container mx-auto'>
                    <br/>
                        <h1 className='text-center'>Selecciona tus Asientos</h1>
                        <br/>
                        <h2 className='text-center'>Asientos Seleccionados</h2>
                        <br/>
                        <h3>{selectedSeats}</h3>
                        <br/>
                        <img src = {seatsLayout} alt = ''></img>
                        <br/>
                        <br/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-4">
                            
                                <div className="col-auto">
                                    <h2>Fila: </h2>
                                </div>

                                <div className="col-auto">
                                    <select className="form-select" defaultValue={'DEFAULT'} aria-label="Fila" {...register('row',{required:true})}>

                                    <option value="DEFAULT" disabled>Seleccione la fila</option>
                                    {
                                        rowOptions.map((letter) =>{
                                        return (
                                                <option key={letter} value={letter}> {letter} </option>
                                            );
                                    })}
                                    </select>
                                </div>

                                <div className="col-auto">
                                    <h2>Asiento: </h2>
                                </div>

                                <div className="col-auto">
                                    <select className="form-select" defaultValue={'DEFAULT'} aria-label="Asiento" {...register('seat',{required:true})}>
                                        <option value="DEFAULT" disabled>Seleccione el asiento</option>
                                        {
                                            seatOptions.map((number) =>{
                                            return (
                                                    <option key={number} value={number}> {number} </option>
                                                );
                                        })}
                                    </select>
                                </div>

                            </div>
                            <br />
                            <center>
                                <button type="submit" className="btn btn-primary mb-3" >Añadir Asiento</button>                        
                            </center>
                        </form>

                        <button className="btn btn-primary mb-3" onClick={()=>{
                            //Update the session seats and make it through the shoppingCar
                            axios.post('http://localhost:3001/shoppingCar/updateTicketsCar',{occupiedSeats:occupiedSeats, userLogged: userLogged,totalTickets:totalTickets, sessionCode:sessionCode} ).then((response) => {
                                console.log(response.data)
                            })

                        }} >Añadir al carrito</button>   
                        
                                                
                    </div>
                    
                </div>
                           
            </header>
    </Fragment>
  )
}
