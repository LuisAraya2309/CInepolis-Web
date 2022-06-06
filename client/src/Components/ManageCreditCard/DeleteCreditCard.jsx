import React, { Fragment,useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'


export function DeleteCreditCard({props}) {

    const {register,handleSubmit} = useForm();
    const [creditCardList,setCreditCardList] = useState([]);

    console.log(props);
    let navigate = useNavigate()
    const moveTo = () =>{
        let path = '/ClientPage'
        navigate(path,{state:{user:props.clientEmail}})
        
    }
    
    useEffect(() => {
        axios.post('http://localhost:3001/creditCards/getCreditCardByClient',{'email': props.clientEmail}).then((response) => {
            setCreditCardList(response.data)
        })
        // eslint-disable-next-line
      },[]);


    const onSubmit = async(data) =>{
        try{
            axios.post('http://localhost:3001/creditCards/deleteCreditCardByNumber',data).then((response) => {
            })
            moveTo()
            
        } catch(err){
            alert('Se produjo un error')
        }
    }
  return (
    <Fragment>
        <div className="col">
            <div className="card border-danger text-center h-100">
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.body ? props.text : ""}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select className="form-select" defaultValue={'DEFAULT'} {...register('number',{required:true})}>
                        <option value="DEFAULT" disabled>Tarjetas registradas</option>
                        {creditCardList.map((creditCard) =>{
                            return (
                                    <option key={creditCard.number} value={creditCard.number}> {creditCard.number} - {creditCard.name} </option>
                                );
                        })}
                        </select>
                        <input type="submit" className="btn btn-danger btn-block" value = "Eliminar tarjeta" />        
                    </form>
                </div>                                                       
            </div>
        </div>
    </Fragment>
  )
}
