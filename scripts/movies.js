// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var id;
let local_amount=JSON.parse(localStorage.getItem("amount"))||0;

  document.getElementById("wallet").innerText=local_amount;

  function debounce(func,delay){
      if(id){
          clearTimeout(id);
      }
      id=setTimeout(function(){
          func();
      },delay)
  }
  

  function main(){
      var name=document.getElementById("search").value;

     let url=`https://www.omdbapi.com/?apikey=bd5d98fb&s=${name}`;
     fetch(url)
     .then(function(res){
            return res.json();
     })
     .then(function(res){
         console.log(res.Search);
         append(res.Search);
     })
  }

  function append(data){
    var container=document.getElementById("movies");
    container.innerHTML=null;
      data.map(function(el){

         let div=document.createElement("div");
         div.style="padding:15px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; "

         let img=document.createElement("img");
         img.src=el.Poster;
         img.setAttribute("id","select")
         

         let title=document.createElement("h2");
         title.innerText=el.Title;

         let btn =document.createElement("button");
         btn.setAttribute("class","book_now");
         btn.addEventListener("click",function(){
            show_movie(el);
         });
         btn.innerText="Book Now";

         div.append(title,img,btn);

         

         var container=document.getElementById("movies");
         
         container.append(div);
      })
  }

  function show_movie(el){
     
    window.location="checkout.html";
    localStorage.setItem("movie",JSON.stringify(el));


  }
 