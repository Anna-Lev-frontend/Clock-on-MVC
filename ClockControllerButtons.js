export default class ClockControllerButtons {
    constructor(model) {
        this.model = model;
    };
    startClickHandler() {
        this.model.start();
    };
    stopClickHandler() {
        this.model.stop();
    };
    get hour(){
        return this.model.hour
    };
    get min() {
        return this.model.min
    };
    get sec() {
        return this.model.sec;
    };
}


