
function ajaxGet(url, callback) {
  const req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) {
          callback(req.responseText);
      } else {
          console.error(req.status + " " + req.statusText + " " + url);
      }
  });
  req.addEventListener("error", function () {
      console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

function afficher(reponse){
  console.log(reponse);
}

function passvalues(){

  const name = document.getElementById("name");
  const city = name.value;

ajaxGet(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=230487580a6de8abdd8475c5c8a22fb9`, function(reponse) {

  const meteo = JSON.parse(reponse);
  

  const temperature = meteo.main.temp;
 

  temperatureR = Math.round(temperature);
  

  
  const conditionsElt = document.createElement("div");
  conditionsElt.textContent = `Il fait actuellement ` + (temperatureR-273)+` °C à ` + city ;

  
  
  const meteoElt = document.getElementById("meteo");
  meteoElt.appendChild(conditionsElt);

});
};






 