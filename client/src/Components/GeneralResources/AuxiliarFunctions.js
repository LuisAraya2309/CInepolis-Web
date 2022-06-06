import axios from 'axios'

export function guardarArchivo(e, imageInfo) {
    
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //prepare info to send to API
      fetch('https://script.google.com/macros/s/AKfycbxpJthcQU0MinllxonsFDGw87shLcXGvM4I9rehsLeQd2Ti1oQ/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          alert('Documento almacenado con éxito')
          imageInfo[0] = a.id
        }).catch(e => console.log(e)) // Or Error in console
    }
  }

function underNine(number){
  if (number < 9){
    return true
  }else{
    return false
  }
}

export function getDate(){
  
  const timePassed = Date.now();
  const date = new Date(timePassed);

  const map = {
    dd: underNine(date.getDate()) ? '0' + date.getDate() : date.getDate(),
    mm: underNine(date.getMonth() + 1) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    yyyy: date.getFullYear()
  }

  return map.yyyy + "-" + map.mm + "-"+ map.dd
}

export function getOverEightTeen(date){
  
  const [year, month, day] = date.split('-')
  let newDate = year-18 + "-" + month + "-" + day
  return newDate

}

export function getSnacks(snackResult,snackImg){
  axios.get('http://localhost:3001/snacks/getSnack').then((response) => {
      getSnacksInfo(response.data,snackResult,snackImg)
  })
}


export function getSnacksInfo(snacksList, snackResult, snackImg){

  let snacksInfo = {}
  let snacksImg = {}

  // eslint-disable-next-line
  snacksList.map((snack) =>{
    let name = snack.name 
    snacksInfo[name] = snack.price
    snacksImg[name] = snack.image
  })
  snackResult[0] = snacksInfo
  snackImg[0] = snacksImg
}

export function getSnacksImages(snacksList, snackResult){
  let snacksImg = {}
  // eslint-disable-next-line
  snacksList.map((snack) =>{
    let name = snack.name 
    snacksImg[name] = snack.image
  })
  snackResult[0] = snacksImg
}

export function getCheckOutInfo(clientEmail,ticketsPrice,snacksPrice){
  var totalPrice = 0;
  var productList = [];

  axios.post('http://localhost:3001/shoppingCar/getShoppingCarByEmail', clientEmail).then((response) => {
      const ticketAmount = response.data.boughtTickets
      const snackAmount = response.data.snacks
      const ticketList = Object.keys(response.data.boughtTickets)
      const snackList = Object.keys(response.data.snacks)

      console.log(ticketAmount);
      console.log(snackAmount);
      console.log(ticketList);
      console.log(snackList);

      for(const ticket in ticketList){
        totalPrice += ticketsPrice[ticketList[ticket]]*ticketAmount[ticketList[ticket]]
        productList.push({'name':ticketList[ticket],'amount':ticketAmount[ticketList[ticket]],'price':ticketsPrice[ticketList[ticket]]*ticketAmount[ticketList[ticket]]})
      }

      for(const snack in snackList){
        totalPrice += snacksPrice[snackList[snack]]*snackAmount[snackList[snack]]
        productList.push({'name':snackList[snack],'amount':snackAmount[snackList[snack]],'price':snacksPrice[snackList[snack]]*snackAmount[snackList[snack]]})
      }

      createBill(productList ,totalPrice, clientEmail) 
      createPDFBill(productList ,totalPrice, clientEmail)
  })
}

function createPDFBill(productList ,totalPrice, clientEmail){
  let productListToString = "";
  for(const product in productList){
    productListToString += productList[product].amount + " " + productList[product].name+" ............... ₡"+productList[product].price + "\n"
  }

  const date = new Date()
  const text = "Cinépolis Costa Rica\n\nHola, a continuación se adjunta la factura del día "+date+":\n"+productListToString+"Por un total de ₡"+totalPrice+"\n"+
  // eslint-disable-next-line
  "Usuario: "+clientEmail.clientEmail+"\n"+ "Buen día,\nCinépolis Costa Rica."

  const billInfo = {'clientEmail':clientEmail.clientEmail, 'text':text, 'subject':"Factura de compra"}
  console.log(billInfo);
}

function createBill(productList ,totalPrice, clientEmail){
  
  const date = new Date()
  const billInfo = {'clientEmail':clientEmail.clientEmail, 'productList':productList,'totalPrice': totalPrice, 'date': date}
  axios.post('http://localhost:3001/bills/createBill', billInfo).then((response) => {
  })

}
