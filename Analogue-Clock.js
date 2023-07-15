const myHour = document.getElementsByClassName('hour')[0];
const myMinute = document.getElementsByClassName('minute')[0];
const mySecond = document.getElementsByClassName('second')[0];


window.setInterval(SEChandler, 1000);
function SEChandler() {
    let myDate = new Date();

    let second = myDate.getSeconds() * 6;
    let minute = myDate.getMinutes() * 6;
    let hour = ( myDate.getHours() * 30 ) + ( myDate.getMinutes() / 2 ) ;


    
    mySecond.style.transform = `rotateZ( ${ second }deg )`;
    myMinute.style.transform = `rotateZ( ${ minute }deg )`;
    myHour.style.transform = ` rotateZ(${ hour }deg )`;
}