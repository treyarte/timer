class Timer{
    constructor(durationInput, startButton, pauseButton, callBack){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);

        if(callBack){
            this.onStart = callBack.onStart;
            this.onTick = callBack.onTick;
            this.onComplete = callBack.onComplete;
        }
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);    
    }

    tick = () =>{
        if(this.timeRemaining <= 0){
            this.pause();

            if(this.onComplete){
                this.onComplete()
            }
        } else {
            this.timeRemaining -= .02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }

    pause = () => {
        clearInterval(this.interval);
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(currentTime){
        durationInput.value = currentTime.toFixed(2);
    }
}