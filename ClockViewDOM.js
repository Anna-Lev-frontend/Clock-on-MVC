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
            this.controller.startClickHandler(this.createArrows.bind(this));
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
        const town = document.createElement('span');
        town.innerText = this.controller.curentTown;
        this.template.append(town);
        this.createClockFace()// создаем корпус часов с циферблатом

    };
    createClockFace() {
        this.clockFace = document.createElement('div');
        this.clockFace.classList.add('clock-face');

        this.arrowContainer= document.createElement('div');
        this.arrowContainer.classList.add('arrow-container');

        const clockFaceTimes = new Array(12).fill('').map((item, index) => {
            const elementDiv = document.createElement('div');
            const elementSpan = document.createElement('span');
            elementSpan.style = `transform: translate(0px, -80px) rotate(${(index + 1) * 30}deg); transform-origin: center 90px;`
            elementSpan.classList.add('point')
            elementSpan.innerText = index + 1;
            elementDiv.append(elementSpan);
            return elementDiv;
        })

        this.clockFace.append(...clockFaceTimes, this.arrowContainer);
        this.createArrows()//создаем стрелки
        this.template.append(this.clockFace);
    };
    createArrows() {
        //div.style = `transform: translate(0px, -200px) rotate(${(index + 1) * 30}deg); transform-origin: center 235px;`
        this.arrowHour = document.createElement('div');
        this.arrowHour.classList.add('arrow-hour');
        this.arrowHour.style = `transform: rotate(${this.controller.hour * 30}deg)`;
        this.arrowMin = document.createElement('div');
        this.arrowMin.classList.add('arrow-min');
        this.arrowMin.style = `transform: rotate(${this.controller.min * 6}deg)`;
        this.arrowSec = document.createElement('div');
        this.arrowSec.classList.add('arrow-sec');
        this.arrowSec.style = `transform: rotate(${this.controller.sec * 6}deg)`;
        this.arrowContainer.innerHTML = '';
        this.arrowContainer.append(this.arrowHour, this.arrowMin, this.arrowSec);
    }
    render() {
        document.querySelector('#root').append(this.template);
    }
    

}