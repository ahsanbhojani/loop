function number(){
let tb = document.getElementById("gg").value;

for (let index = 1; index <=100; index++){
  let showResult = tb + " X " + index + " = " + tb*index ;
    
  document.write(showResult +"<br>");  
  //document.getElementById('h1').innerText+=showResult;
}
}