import React,{Fragment} from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

var imageInfo 

export  function CreateSnack() {

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
                imageInfo = a
                console.log(imageInfo)
            }).catch(e => console.log(e)) // Or Error in console
        }
      }

    const {register,handleSubmit} = useForm();

    let navigate = useNavigate()
    const moveTo = () =>{
      let path = '/ManageSnack'
      navigate(path)
    }

    const onSubmit = async(data) =>{

        try{
            axios.post('http://localhost:3001/snacks/insertSnack',data).then((response) => {
            })
            moveTo()
        }catch(err){
            alert(err)
        }
    }

  return (
      <Fragment>
        <header className="App-header">
            <div className='container mx-auto'>
                <div className="card bg-light w-100 mb-3" >                    
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-center">Ingresar un alimento</h1>
                                <br></br>
                                
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" {...register('name',{required:true})}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Tipo de alimento</label>
                                            
                                            <select className="form-select" defaultValue={'DEFAULT'} aria-label="TipoAlimento" {...register('type',{required:true})} >
                                                <option value="DEFAULT" disabled>Tipo de alimento</option>
                                                <option key= "1" value="Aperitivos" >Aperitivos</option>
                                                <option key= "2" value="Dulces" >Dulces</option>
                                                <option key= "3" value="Bebidas" >Bebidas</option>
                                            </select>
                                            
                                        </div>

                                    </div>
                                    <br></br>

                                    <div className="row">
                                        
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Inventario</label>
                                            <input type="number" className="form-control" {...register('stock',{required:true})}/>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Precio</label>
                                            <input type="number" className="form-control" {...register('price',{required:true})}/>
                                        </div>
                                        
                                    </div>

                                    <br></br>
                                    <div className="row">
                                        
                                        <div className="col">
                                            <label className="form-label" htmlFor="customFile">Imagen del producto</label>
                                            <input type="file" accept="image/*" className="form-control" id="customFile" onChange={(e) => guardarArchivo(e)} />
                                    
                                        </div>
                                    </div>

                                    <br></br>

                                    <center>
                                        <button type="submit" className="btn btn-dark text-center">Ingresar información</button>  
                                    </center>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </Fragment>
    
  )

}
