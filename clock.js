export default class Clock {
    constructor(carrentUTC) {
        this.carrentUTC = carrentUTC;
           };
    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                const date = new Date();
                this.hour = date.getUTCHours() + this.carrentUTC;
                this.min = date.getUTCMinutes();
                this.sec = date.getUTCSeconds();
                console.log(this.hour,this.min,this.sec);
            }, 1000);
        }
    };
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };
}
