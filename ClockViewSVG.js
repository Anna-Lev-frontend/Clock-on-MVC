export default class ClockViewSVG {
    constructor(controller) {
        this.svgLink = 'http://www.w3.org/2000/svg'
        this.controller = controller;
        this.createTemplate();
        this.createClockFace();
        this.createArrows();
        this.createButtons();

    }
    rotateArrow() {
        this.arrowHour.setAttributeNS(null, 'style', `transform: rotate(${this.controller.hour * 30}deg); transform-origin: center`);
        this.arrowMin.setAttributeNS(null, 'style', `transform: rotate(${this.controller.min * 6}deg); transform-origin: center`);
        this.arrowSec.setAttributeNS(null, 'style', `transform: rotate(${this.controller.sec * 6}deg); transform-origin: center`);
    }
    createTemplate() {
        this.template = document.createElementNS(this.svgLink, 'svg');
        this.template.setAttributeNS(null, 'width', 200);
        this.template.setAttributeNS(null, 'height', 220);
        this.template.setAttributeNS(null, 'viewBox', '0 0 200 220');
        const town = document.createElementNS(this.svgLink,'text');
        town.setAttributeNS(null, 'x', 100);
        town.setAttributeNS(null, 'y', 10);
        town.append(this.controller.curentTown);
        this.template.append(town);
    }
    createButtons() {
        const btnStart = document.createElementNS(this.svgLink, 'rect');
        btnStart.setAttributeNS(null, 'width', 50);
        btnStart.setAttributeNS(null, 'height', 20);
        btnStart.setAttributeNS(null, 'fill', 'gray');
        btnStart.setAttributeNS(null, 'x', 0);
        btnStart.setAttributeNS(null, 'y', 0);

        const btnTextStart = document.createElementNS(this.svgLink, 'text');
        btnTextStart.setAttributeNS(null, 'x', 20);
        btnTextStart.setAttributeNS(null, 'y', 10);
        btnTextStart.setAttributeNS(null, 'style', 'pointer-events: none');
        btnTextStart.append('start');


        btnStart.addEventListener('click', () => {
            this.controller.startClickHandler(this.rotateArrow.bind(this));
        });
        const btnStop = document.createElementNS(this.svgLink, 'rect');

        btnStop.setAttributeNS(null, 'width', 50);
        btnStop.setAttributeNS(null, 'height', 20);
        btnStop.setAttributeNS(null, 'fill', 'gray');
        btnStop.setAttributeNS(null, 'x', 50);
        btnStop.setAttributeNS(null, 'y', 0);

        const btnTextStop = document.createElementNS(this.svgLink, 'text');

        btnTextStop.setAttributeNS(null, 'x', 70);
        btnTextStop.setAttributeNS(null, 'y', 10);
        btnTextStop.setAttributeNS(null, 'style', 'pointer-events: none');
        btnTextStop.append('stop');
        btnStop.addEventListener('click', () => {
            this.controller.stopClickHandler();
        });
        this.template.append(btnStart, btnTextStart, btnStop, btnTextStop);
    }
    createClockFace() {
        this.clockFace = this.createCircle(100, 'blue', 100, 120)
        const clockFaceTimes = [{ x: 145, y: 50 }, { x: 165, y: 80 }, { x: 175, y: 115 }, { x: 170, y: 155 }, { x: 145, y: 185 }, { x: 105, y: 195 }, { x: 60, y: 185 }, { x: 35, y: 155 }, { x: 25, y: 115 }, { x: 35, y: 75 }, { x: 60, y: 50 }, { x: 100, y: 40 }].reduce((acc, item, index) => {
            const elementCircle = this.createCircle(10, 'yellow', item.x, item.y);
            const elementText = document.createElementNS(this.svgLink, 'text');
            elementText.setAttributeNS(null, 'x', item.x);
            elementText.setAttributeNS(null, 'y', item.y);
            elementText.append(index + 1);
            acc.circle.push(elementCircle);
            acc.circle.push(elementText);

            return acc;
        }, { circle: [], text: [] })


        //this.createArrows()//создаем стрелки
        this.template.append(this.clockFace, ...clockFaceTimes.circle, ...clockFaceTimes.text);
    }
    createCircle(r, fill, cx, cy) {
        const circle = document.createElementNS(this.svgLink, 'circle');
        circle.setAttributeNS(null, 'r', r);
        circle.setAttributeNS(null, 'fill', fill);
        circle.setAttributeNS(null, 'cx', cx);
        circle.setAttributeNS(null, 'cy', cy);

        return circle;
    }
    createArrows() {
        this.arrowHour = this.createArrow('8px', 'red', 80)
        this.arrowMin = this.createArrow('6px', 'red', 60)
        this.arrowSec = this.createArrow('4px', 'yellow', 40)
        this.template.append(this.arrowHour, this.arrowMin, this.arrowSec)
    }
    createArrow(size, color, y2) {
        const arrow = document.createElementNS(this.svgLink, 'line')

        arrow.setAttributeNS(null, 'stroke-width', size);
        arrow.setAttributeNS(null, 'stroke', color);
        arrow.setAttributeNS(null, 'x1', 100);
        arrow.setAttributeNS(null, 'y1', 120);
        arrow.setAttributeNS(null, 'x2', 100);
        arrow.setAttributeNS(null, 'y2', y2);

        return arrow;
    }
    render() {
        document.querySelector('#root').append(this.template);
    }

}