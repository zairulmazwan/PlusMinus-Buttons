 
//when the page is loaded, this default message will be dispayed in the p tag
 var value = parseInt(document.getElementById('num').value);
 if(value==0){
    document.getElementById('msg').innerHTML = "You do not have a ticket to buy";
  }


function decrease (){
  var value = parseInt(document.getElementById('num').value);
  value = isNaN(value) ? 0 : value;
  (value < 1) ? value = 1 : ''; //to avoid negative value
  value--;
  document.getElementById('num').value = value;

    
  if(value!=20){
    document.getElementById('msg').innerHTML = "";
  }

   if(value==0){
    document.getElementById('msg').innerHTML = "You do not have a ticket to buy";
  }
}

function increase (){
  var value = parseInt(document.getElementById('num').value);
  value = isNaN(value)? 0:value;
  (value > 19) ? value = 19 : ''; //to avoid more than 20
  value++;
  document.getElementById('num').value = value;

  if(value==20){
    document.getElementById('msg').innerHTML = "You have reached the maximum value";
  }
  if(value>0 && value<20){
    document.getElementById('msg').innerHTML = "";
  }


}

