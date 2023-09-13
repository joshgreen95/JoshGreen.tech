import { DayNightGradients } from "./DayNightGradients.js";

class TimeOfDay{
    constructor(){
        this.hour = 9;
        //this.hour = new Date().getHours();
        this.lastUpdated = new Date().getTime();
        this.isNight = this.hour < 8 || this.hour > 21;
        this.dayNightGradients = DayNightGradients;
    }

    UpdateHour(){
        const testHour = new Date().getHours();
        if(this.timeSinceLastUpdate !== testHour){
            const date = new Date();
            this.hour = date.getHours();
            this.lastUpdated = date.getTime();

            this.isNight = 8 < this.hour && this.hour < 21;
        } 
    }

    get skyColor(){
        return this.dayNightGradients[this.hour].skyColor;
    }

    get horizonColor() {
        return this.dayNightGradients[this.hour].horizonColor;
    }

    get groundColor() {
        return this.dayNightGradients[this.hour].groundColor;
    }
}




export { TimeOfDay };