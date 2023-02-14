// global variables
var value;
var data ="";
var solution ="";

// get value from buttons
var buttons = document.getElementsByClassName('oprater');

// var buttons = document.querySelectorAll('.oprater');

// for (btn of buttons){
 
//   btn.addEventListener('click', Input);
//   var Input = (e)=>{
//     value = e.target.innerText;
//     data = data + value;
//     document.getElementById('input').innerHTML = data;
//   }
// }

for(var i = 0; i<buttons.length; i++){

    buttons[i].addEventListener('click', Input);

      var Input = (e)=>{
        value = e.target.innerText;
        data = data + value;
        document.getElementById('input').innerHTML = data;
        solve();
      }
}

// fun for solving problem
function solve(){
    solution = eval(data);
    document.getElementById('output').innerHTML= "= "+solution;
}

// fun for reduse value
function reduse(){
    var red_data = data.substring(0, data.length - 1);
    document.getElementById('input').innerHTML= red_data;
    data = red_data;

    document.getElementById('output').style= "font-size: 20px";
    document.getElementById('input').style= "font-size: 35px";
}

// fun for reset output & input
function reset(){
    data = "";
    solution = "";
    document.getElementById('input').innerHTML= data;
    document.getElementById('output').innerHTML= solution;
    document.getElementById('output').style= "font-size: 20px";
    document.getElementById('input').style= "font-size: 35px";
}

// fun for persentage
function persentage(){

   solution = eval('solution/100');
   document.getElementById('output').innerHTML= "= "+solution;

}

// fun for zoom output and minimise input
var equal_btn = document.getElementsByClassName('equal');
equal_btn.addEventListener('click', zoom);

function zoom(){
    document.getElementById('output').style= "font-size: 35px";
    document.getElementById('input').style= "font-size: 20px";
}