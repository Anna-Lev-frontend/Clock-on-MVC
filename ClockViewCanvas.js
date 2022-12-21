export default class ClockViewCanvas {
    constructor(controller) {
        this.controller = controller;
        this.template = document.createElement('div');
        this.template.classList.add('template');
        this.canvas = document.createElement('canvas');
        this.canvas.width = 200;
        this.canvas.height = 220;
        this.ctx = this.canvas.getContext('2d');
        this.template.append(this.canvas);

        this.generateTemplate();
    }
    createButtons() {
        const buttons = [{ text: 'start', x: 0, y: 0 }, { text: 'stop', x: 35, y: 0 }];
        buttons.forEach((item) => {
            this.ctx.strokeStyle = 'black';
            this.ctx.fillStyle = 'lightgray';
            this.ctx.fillRect(item.x, item.y, 32, 20);
            this.ctx.font = '14px sans-serif';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText(item.text, item.x, 10);
        })
        this.canvas.addEventListener('click', (event) => {
            const x = event.offsetX;
            const y = event.offsetY;

            if (x >= 0 && x <= 35 && y >= 0 && y <= 10) {
                this.controller.startClickHandler(this.generateTemplate.bind(this))
            } else if (x >= 37 && x <= 70 && y >= 0 && y <= 10) {
                this.controller.stopClickHandler(this.generateTemplate.bind(this))
            }

        })

    }
    generateTemplate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //this.ctx.fillStyle = 'white';
        //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.createButtons();
        this.ctx.fillText(this.controller.curentTown, 80, 10);
        this.createClockFace();
        this.createArrows();
    }
    createClockFace() {

        this.ctx.beginPath();
        this.ctx.arc(100, 120, 100, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();
        [{ x: 145, y: 50 }, { x: 165, y: 80 }, { x: 175, y: 115 }, { x: 170, y: 155 }, { x: 145, y: 185 }, { x: 105, y: 195 }, { x: 60, y: 185 }, { x: 35, y: 155 }, { x: 25, y: 115 }, { x: 35, y: 75 }, { x: 60, y: 50 }, { x: 100, y: 40 }].forEach((item, index) => {
            this.ctx.beginPath();
            this.ctx.arc(item.x, item.y, 11, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = 'red';
            this.ctx.fill();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = 'red';
            this.ctx.stroke();
            this.ctx.font = '14px sans-serif';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText(index + 1, (item.x) - 5, item.y +3);

        })

    }
    createArrows() {

        const arrows = [
            { color: 'black', height: -50, width: 7, deg: this.controller.hour * 30 },
            { color: 'black', height: -60, width: 6, deg: this.controller.min * 6 },
            { color: 'red', height: -70, width: 4, deg: this.controller.sec * 6 }]
        this.ctx.translate(100, 120);
        arrows.forEach((item) => {
            this.ctx.strokeStyle = 'black';
            this.ctx.fillStyle = item.color;
            //this.ctx.rotate(0)
            this.ctx.rotate(item.deg * Math.PI / 180);
            this.ctx.fillRect(0, 0, item.width, item.height);
            this.ctx.rotate(-(item.deg * Math.PI / 180))
        })
        this.ctx.translate(-100, -120);
        //this.ctx.rotate(0);
    }
    render() {
        document.querySelector('#root').append(this.template);
    }
}
