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