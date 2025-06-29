let decinp = document.getElementById("dec-inp");
let bininp = document.getElementById("bin-inp");
let error = document.getElementById("Error");
let btn = document.getElementById("btn");
btn.addEventListener('click', () =>{
     let decValue=parseInt(decinp.value);
     if(isNaN(decValue)){
        bininp.value="";
     }else{
     bininp.value=decValue.toString(2);
     }
});