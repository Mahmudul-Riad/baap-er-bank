  
const withdraw=document.getElementById('withdraw').innerText
// console.log(deposit)
document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField=document.getElementById('deposit-field')
    const depositAmount= depositField.value
    const newdepositAmount=parseFloat (depositAmount);
    
    // console.log(typeof newdepositAmount)

    const prevdeposit= document.getElementById('deposit-total').innerText
    
    const previousdeposit=parseFloat(prevdeposit)
    
  
 
     const total= previousdeposit+newdepositAmount
     console.log( total)
     prevdeposit==total
    document.getElementById('deposit-total').innerText=total
    
    
    depositField.value=""
    // console.log(total)
    // console.log("hello")

    // console.log(prevdeposit)


    



   

})

document.getElementById('btn-withdraw').addEventListener('click',function(){

    const depositField=document.getElementById('withdraw-field')
    const withrawAmount= depositField.value
    console.log(withrawAmount)



   

})