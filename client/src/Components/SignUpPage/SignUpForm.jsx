import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';


import axios from 'axios';

export function SignUpForm() {

    const {register,handleSubmit} = useForm();
    var vaccineInfo

    const onSubmit = async(data) =>{
        try{
            const response = await axios.post('http://localhost:3001/users/createUser', data);
            console.log(response)
        }catch(err){
                alert(err)
        }
    }

    function guardarArchivo(e) {
        var file = e.target.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(e.target.files[0]) //start conversion...
        reader.onload = function (e) { //.. once finished..
          var rawLog = reader.result.split(',')[1]; //extract only thee file data part
          console.log("Prueba")
          console.log(file.name)
          var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //prepare info to send to API
          fetch('https://script.google.com/macros/s/AKfycbxpJthcQU0MinllxonsFDGw87shLcXGvM4I9rehsLeQd2Ti1oQ/exec', //your AppsScript URL
            { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
            .then(res => res.json()).then((a) => {
              alert('Documento almacenado con éxito')
              vaccineInfo = a
              console.log(vaccineInfo)
            }).catch(e => console.log(e)) // Or Error in console
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
                    <input type="file" accept="application/pdf" className="form-control" id="customFile" onChange={(e) => guardarArchivo(e)} />
                            
                </div>
            </div>

            <br></br>
            <div className="row">

                <div className="col">
                    <input type="number" className="form-control" placeholder="Identificación" aria-label="Identificación" {...register('ID',{required:true})}/>
                </div>

                <div className="col">
                    <input type="date" className="form-control" placeholder="Fecha de nacimiento" aria-label="Fecha de nacimiento" min="2000-01-02" {...register('birthDate',{required:true})}/>
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
