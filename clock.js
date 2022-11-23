export default class Clock {
    constructor(carrentUTC) {
        this.carrentUTC = carrentUTC;
        console.log('fgfdhsjs')
    }
    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                const date = new Date();
                this.hour = date.getUTCHours() + this.carrentUTC;
                this.min = date.getUTCMinutes();
                this.sec = date.getUTCSeconds();
            }, 1000);
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId)
        }
    }
}
