import Clock from "./clock.js";
import ClockControllerButtons from "./ClockControllerButtons.js";
import ClockViewDOM from "./ClockViewDOM.js";
//import ClockViewSVG from "./ClockViewSVG.js";
import ClockViewCanvas from "./ClockViewCanvas.js";

const getControllerWithModel = (num=0)=>{
    const model = new Clock(num);
    const controller = new ClockControllerButtons(model);
    console.log(controller)
    return controller;
}


// главная функция запуска
const main =()=>{
    //const viewSvg = new ClockViewSVG(getControllerWithModel()); 
    const viewDom1 = new ClockViewDOM(getControllerWithModel(5));
    const viewDom2 = new ClockViewDOM(getControllerWithModel());
    const viewDom3 = new ClockViewCanvas(getControllerWithModel(1));
    const viewDom4 = new ClockViewCanvas(getControllerWithModel(3));
    const viewDom5 = new ClockViewDOM(getControllerWithModel(6));
    const viewDom6 = new ClockViewDOM(getControllerWithModel(9));
    viewDom1.render();
    viewDom2.render();
    viewDom3.render();
    viewDom4.render();
    viewDom5.render();
    viewDom6.render();
    
};
main();


