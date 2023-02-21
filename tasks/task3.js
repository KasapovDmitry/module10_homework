 // Задание 3

 const wsUri = "wss://echo-ws-service.herokuapp.com";

 const infoOutput = document.querySelector('.info_output');
 const chatOutput = document.querySelector('.chat_output');
 const chatInput = document.querySelector('.chat_input input');
 const btnSend = document.querySelector('.btn_send');
 const btnGeo = document.querySelector('.btn_geo');
 const text = 'https://www.openstreetmap.org/';
 let socket = new WebSocket(wsUri);

 socket.onopen = () => {
   infoOutput.innerText = "Чат работает";
 }

 socket.onmessage = (event) => {
   if (event.data.slice(0, 30) === 'https://www.openstreetmap.org/') return;
     writeToChat('Ответ: ' + event.data, true);
 }

 socket.onerror = () => {
   infoOutput.innerText = "При передаче данных произошла ошибка";
 }

 btnSend.addEventListener('click', sendMessage);


 function sendMessage() {
   if (!chatInput.value) return;
   socket.send(chatInput.value);
   writeToChat('Вы: ' + chatInput.value, false);
   chatInput.value = "";
 }

 btnGeo.addEventListener('click', sendGeo);

 function sendGeo() {
   if ("geolocation" in navigator) {
     let locationOptions = {
       enableHighAccuracy: true
     };
     navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
   } else {
     writeOutput("Ваш браузер не поддерживает функцию определения местоположения");
   }
 }

 function locationSuccess(data) {
   // let link = `https://yandex.ru/maps/?pt=${data.coords.longitude},${data.coords.latitude}&z=18&l=map`; // яндекс
   let link = `https://www.openstreetmap.org/search?query=${data.coords.latitude}%20${data.coords.longitude}#map=12/${data.coords.longitude}/${data.coords.latitude}`;
   socket.send(link);
   writeToGeo(link, text, 'red');
 }

 function writeToGeo(message, str, cls) {
   let messageHTML = `<a href="${message}" class="${cls}" target="_blank">${str}</a>`;
   chatOutput.innerHTML += messageHTML;
 }

 function locationError() {
   infoOutput.innerText = "При определении местоположения произошла ошибка";
 }

 function writeToChat(message, isRecived) {
   let messageHTML = `<div class="${isRecived? "recived" : "sent"}">${message}</div>`;
   chatOutput.innerHTML += messageHTML;
 }