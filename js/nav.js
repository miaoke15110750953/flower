ajax({
    url:"http://127.0.0.1:5500/nav.html",
    type:"get",
})
//ES6
.then(res=>{
   document.getElementById("nav").innerHTML=res;
    //header.innerHTML=res;
})