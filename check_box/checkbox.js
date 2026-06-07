const mycheckbox = document.getElementById("mycheckbox")
const UPIbtn = document.getElementById("UPIbtn")
const cardbtn = document.getElementById("cardbtn")
const rupaybtn = document.getElementById("rupaybtn")
const mysubmit = document.getElementById("mysubmit")
const moderesult = document.getElementById("moderesult")
const paymentresult = document.getElementById("paymentresult")

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        moderesult.textContent = `You are subscribed!`
    } else{
        moderesult.textContent = `Please Subscribe to Continue`
    }

    if(UPIbtn.checked){
        paymentresult.textContent = ` You are paying with UPI`
    } else if(cardbtn.checked){
        paymentresult.textContent = ` You are paying with Card`
    } else if(rupaybtn.checked){
        paymentresult.textContent = ` You are paying with Rupay`
    }else {
        paymentresult.textContent = ` Please select any payment mode to subscribe.Thank you `
    }
}