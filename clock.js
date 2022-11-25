export default class Clock {
    constructor(carrentUTC) {
        this.carrentUTC = carrentUTC;
        this.town = { 5: 'New York', 0: 'London', 1: 'Berlin', 3: 'Minsk',  6: 'Tokio', 9: 'Vladivostok'};
};
start(callback) {
    if (!this.timerId) {
        this.timerId = setInterval(() => {
            const date = new Date();
            this.hour = date.getUTCHours() + this.carrentUTC;
            this.min = date.getUTCMinutes();
            this.sec = date.getUTCSeconds();
            callback();
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
