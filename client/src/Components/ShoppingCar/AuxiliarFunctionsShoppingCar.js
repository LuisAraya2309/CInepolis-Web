import axios from 'axios'

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
  }
  
  function createBill(productList ,totalPrice, clientEmail){
    
    const date = new Date()
    const billInfo = {'clientEmail':clientEmail.clientEmail, 'productList':productList,'totalPrice': totalPrice, 'date': date}
    axios.post('http://localhost:3001/bills/createBill', billInfo).then((response) => {
    })
  
  }
  