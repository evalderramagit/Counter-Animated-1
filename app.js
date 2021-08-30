var data = 0;

document.getElementById("counting").innerText = data;

function increment()  {
  data = data + 10;
  document.getElementById("counting").innerText = data;

  if(data===100)
  console.log("!!!success!!!")
}

function decrement(){
  data = data - 10;
  document.getElementById("counting").innerText = data
  
  if(data===-100)
    console.log('ERROR')
  }
// if(data==100)
//   console.log("!!!success!!!")


// if(data==-100){
//   console.log('ERROR')
// }
///this is how we started

