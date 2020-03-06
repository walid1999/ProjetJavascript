

 function passvalues(){
    var name = document.getElementById("name");
    var city = name.value;

 
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=230487580a6de8abdd8475c5c8a22fb9`
    
  )
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
 };
