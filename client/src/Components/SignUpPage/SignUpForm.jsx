import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form'
import {guardarArchivo} from "../GeneralResources/AuxiliarFunctions.js"
import axios from 'axios'
import {getDate} from "../GeneralResources/AuxiliarFunctions.js"
import {getOverEightTeen} from "../GeneralResources/AuxiliarFunctions.js"
import {useNavigate} from "react-router-dom"

var pdfInfo = []

export function SignUpForm() {

    const {register,handleSubmit} = useForm();
    const date = getDate();
    const date2 = getOverEightTeen(date);

    let navigate = useNavigate()
    const moveTo = () =>{
      let path = '/'
      navigate(path)
    }

    const onSubmit = async(data) =>{
        try{
            data.type = 'client'
            data.clientInformation = {"id":data.ID, "birthDate":data.birthDate,"vaccines":data.vaccines,
            "vaccinationCard":"https://drive.google.com/uc?export=view&id=" + pdfInfo[0] + "&rl"}
            delete data["ID"]; delete data["birthDate"]; delete data["vaccines"];

            axios.post('http://localhost:3001/shoppingCar/insertShoppingCar',{clientEmail:data['email']}).then((response) => {});
            const response = await axios.post('http://localhost:3001/users/createUser', data);
            console.log(response);
            moveTo()
            

        }catch(err){
                alert(err)
        }
    }

  return (
      <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" {...register('name',{required:true})}/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Apellido 1" aria-label="Apellido 1" {...register('lastname1',{required:true})}/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Apellido 2" aria-label="Apellido 2" {...register('lastname2',{required:true})}/>
                </div>
            </div>

            <br></br>
            <div className="row">

                <div className="col">
                    <input type="email" className="form-control" placeholder="Correo electrónico" aria-label="Correo electrónico" {...register('email',{required:true})}/>
                </div>

                <div className="col">
                    <input type="password" className="form-control" placeholder="Contraseña" aria-label="Contraseña" {...register('password',{required:true})}/>
                </div> 
            </div>

            <br></br>
            <div className="row">
                <div className="col">
                                                
                        <select className="form-select" defaultValue={'DEFAULT'} aria-label="Esquema de vacunación" {...register('vaccines',{required:true})} >
                            <option value="DEFAULT" disabled>Esquema de vacunación</option>
                            <option key= "1" value="1" >Primera dosis</option>
                            <option key= "2" value="2" >Segunda dosis</option>
                            <option key= "3" value="3" >Tercera dosis o más</option>

                        </select>
                </div>
                <div className="col"> 
                    <input type="file" accept="application/pdf" className="form-control" id="customFile" onChange={(e) => guardarArchivo(e,pdfInfo)} />
                            
                </div>
            </div>

            <br></br>
            <div className="row">

                <div className="col">
                    <input type="number" className="form-control" placeholder="Identificación" aria-label="Identificación" {...register('ID',{required:true})}/>
                </div>

                <div className="col">
                    <input type="date" className="form-control" placeholder="Fecha de nacimiento" aria-label="Fecha de nacimiento" max={date2} {...register('birthDate',{required:true})}/>
                </div> 
            </div>

            <br></br>
            <center>
                <button type="submit" className="btn btn-dark text-center">Registrar Usuario</button>    
            </center>
        </form>
    </Fragment>
  )
}
