import React,{Fragment} from 'react'
import { useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'

var imageInfo 

export function ModifySnack() {

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
              console.log(imageInfo);
            }).catch(e => console.log(e)) // Or Error in console
        }
      }

    const {state} = useLocation();
    const snackInfo = state.snackInfo;
    const {register,handleSubmit} = useForm();

    let navigate = useNavigate()
    const moveTo = () =>{
        let path = "/ManageSnack"
        navigate(path)
    }

    const onSubmit = async(data) =>{

        try{
            let snackInfoImage = data
            snackInfoImage.image = "https://drive.google.com/uc?export=view&id=" + imageInfo.id + "&rl"
            axios.post('http://localhost:3001/snacks/updateSnackByName',snackInfoImage).then((response) => {
            })
            moveTo()
        }catch(err){
                alert('Snack invalido')
        }
    }

  return (
      <Fragment>
        <header className="App-header">
            <div className='container mx-auto'>
                <div className="card bg-light w-100 mb-3" >                    
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={snackInfo.image} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-center">Modificar un alimento</h1>
                                <br></br>
                                
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row">

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" value = {snackInfo.name} {...register('name',{required:true})}/>
                                        </div>
                                        
                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Tipo de alimento</label>
                                            <input type="text" className="form-control" value = {snackInfo.type} {...register('type',{required:true})}/>                                           
                                        </div>

                                    </div>
                                    <br></br>

                                    <div className="row">

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Inventario</label>
                                            <input type="number" className="form-control" placeholder = {snackInfo.stock} {...register('stock',{required:true})}/>        
                                        </div>

                                        <div className="col">
                                            <label htmlFor="text" className="form-label">Precio</label>
                                            <input type="text" className="form-control" placeholder = {snackInfo.price} {...register('price',{required:true})}/>        
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
                                        <button type="submit" className= "btn btn-dark text-center" >Modificar información</button>    
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
