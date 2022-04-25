// Store the wallet amount to your local storage with key "amount"

function get(id){
    return document.getElementById(id).value;
}

document.getElementById("add_to_wallet").addEventListener("click", function(){

let amount = get("amount");
let local_amount=JSON.parse(localStorage.getItem("amount"))||0;
let total= eval(`${amount}+${local_amount}`);
 localStorage.setItem("amount",JSON.stringify(Number(total)));
window.location.reload();
  
})

document.getElementById("book_movies").addEventListener("click",function(){
    window.location="movies.html"
})

let local_amount=JSON.parse(localStorage.getItem("amount"))||0;

  document.getElementById("wallet").innerText=local_amount;