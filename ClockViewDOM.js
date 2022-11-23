export default class ClockViewDOM {
    constructor(controller) {
        this.controller = controller;
        this.template = document.createElement('div');
        this.template.classList.add('template');
        this.generateTemplate();
    };
    createButtons() {
        this.btnStart = document.createElement('button');
        this.btnStart.classList.add('btn');
        this.btnStart.innerText = 'Start';
        this.btnStart.addEventListener('click', ()=>{
            this.controller.startClickHandler();
        });
        this.btnStop = document.createElement('button');
        this.btnStop.classList.add('btn');
        this.btnStop.innerText = 'Stop';
        this.btnStop.addEventListener('click', ()=>{
            this.controller.stopClickHandler();
        });
        this.template.append(this.btnStart, this.btnStop);
    };
    generateTemplate() {
        this.createButtons()//создаем кнопки
        this.createClockFace()// создаем корпус часов с циферблатом

    };
    createClockFace() {
        this.clockFace = document.createElement('div');
        this.clockFace.classList.add('clock-face');
        const clockFaceTimes = new Array(12).fill('').map((item, index) => {
            const elementDiv = document.createElement('div');
            const elementSpan = document.createElement('span');
            elementSpan.innerText = index + 1;
            elementDiv.append(elementSpan);
            return elementDiv;
        })
        this.clockFace.append(...clockFaceTimes);
        this.createArrows()//создаем стрелки
        this.template.append(this.clockFace);
    };
    createArrows() {
        this.arrowHour = document.createElement('div');
        this.arrowHour.classList.add('arrow-hour');
        this.arrowMin = document.createElement('div');
        this.arrowMin.classList.add('arrow-min');
        this.arrowSec = document.createElement('div');
        this.arrowSec.classList.add('arrow-sec');
        this.clockFace.append(this.arrowHour, this.arrowMin, this.arrowSec);
    }
    render() {
        document.body.append(this.template);
    }

}