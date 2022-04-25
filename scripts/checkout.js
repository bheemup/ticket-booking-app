// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let local_amount=JSON.parse(localStorage.getItem("amount"))||0;

document.getElementById("wallet").innerText=local_amount;


    var data =JSON.parse(localStorage.getItem("movie"));
    console.log(data);

    var container=document.getElementById("movie");
    container.innerHTML=null;

    let div=document.createElement("div");
    div.style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding:10px";

    let img =document.createElement("img");
    img.src=data.Poster;

    let name1 =document.createElement("h2")
    name1.innerText=data.Title;
     
    div.append(name1,img);
    container.append(div);


document.getElementById("confirm").addEventListener("click",function(){
    var seat =document.getElementById("number_of_seats").value;
   var name=document.getElementById("user_name").value;
   if(seat==''|| name==''){
       alert("please enter correct details");
   }
   else{
    let total = Number(eval(`${seat}`+0+0))
    if(total>local_amount){
        alert("Insufficient Balance!")
    }
  else{
        alert("Booking successful!");
        let new_amount =eval(local_amount-total);
        localStorage.setItem("amount",JSON.stringify(new_amount));
        window.location.reload();
    }
   }

   
})