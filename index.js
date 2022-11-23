import Clock from "./clock";
import ClockControllerButtons from "./ClockControllerButtons";
import ClockViewDOM from "./ClockViewDOM.js";
import ClockViewSVG from "./ClockViewSVG";
import ClockViewCanvas from "./ClockViewCanvas";

const initSvgClock = ()=>{

};
const initDomClock = () => {

};
const initCanvasClock = () => {

};
const main =()=>{

};


// const makePointsDeal = () => {
//     const points = new Array(12).fill(null);
//     const arrayDiv = points.map((value, index) => {
//         const div = document.createElement('div');
      
//        div.style = `transform: translate(0px, -200px) rotate(${(index + 1) * 30}deg); transform-origin: center 235px;`

//         div.classList.add('point');
//         div.innerText = index + 1;
//         return div;
//     })
//     return arrayDiv
// }

// const makeArrows = () => {
//     const makeArrows = document.createElement('div');
//     makeArrows.classList.add('make-arrows')
//     const arrowHour = document.createElement('div');
//     arrowHour.classList.add('hr');
        
//     const arrowMin = document.createElement('div');
//     arrowMin.classList.add('mn');
  
//     const arrowSec = document.createElement('div');
//     arrowSec.classList.add('sc');
//     makeArrows.append(arrowHour,arrowMin,arrowSec);

//     return makeArrows;
// }

// const makeDial = () => {
//     const mainDial = document.createElement('div');
//     mainDial.classList.add('main-dial');
//     const pointsDeal = makePointsDeal();
//     const arrow = makeArrows();
//     mainDial.append(...pointsDeal, arrow)

//     return mainDial;
// }
// const clock = setInterval((
// ) => {
//     const deg = 6;
//     const date = new Date();
//     const min = date.getMinutes() * deg;
//     const sec = date.getSeconds() * deg;
//     const hour = date.getHours() * 30;
//     const hr = document.querySelector('.hr');
//     const sc = document.querySelector('.sc');
//     const mn = document.querySelector('.mn')
//     hr.style.transform = `rotateZ(${(hour) + (min / 12)}deg)`;
//     mn.style.transform = `rotateZ(${min}deg)`;
//      sc.style.transform = `rotateZ(${sec}deg)`;

// },);

// document.body.append(makeDial())