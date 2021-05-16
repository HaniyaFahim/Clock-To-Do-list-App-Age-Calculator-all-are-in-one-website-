// let d , h , m , s , clock;

// function clocky(){
// d=new Date();
// h=d.getHours();
// m=d.getMinutes();
// s=d.getSeconds();



// if(h<=9){
//     h='0' + h;
// }
// if(m<=9){
//     m='0' + m;
// }
// if(s<=9){
//     s='0' + s;
// }

// clock = h + ":" + m + ":" + s;

// document.getElementById('clock').innerHTML = clock ;

// setTimeout(clocky , 1000);
// }
// clocky()

// analog

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()





// This is just to auto-update the data-text if you're editing it directly on the page and is not required for the actual effect
$('[data-text]').on('keyup', function(){
  $(this).attr('data-text', $(this).text());
});






