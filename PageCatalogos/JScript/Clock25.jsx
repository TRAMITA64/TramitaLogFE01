let tid;
class Clock25 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakValue: 5,
            sessionValue: 25,
            timerText: "25:00",
            starStop: 0,
            plusTime:0
        }
        this.handleClickBreak = this.handleClickBreak.bind(this);
        this.handleClickSession = this.handleClickSession.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.sessionTime = this.sessionTime.bind(this);
        this.handleStartStop = this.handleStartStop.bind(this);
        this.timerAvance = this.timerAvance.bind(this);
    }
    
    handleStartStop() {
        if (this.state.starStop == 1)
            this.state.starStop = 0;
        else
            this.state.starStop = 1;
        
        if (this.state.starStop != 0) {
            
            tid = setInterval(this.timerAvance, 1000);
        }
        else {
            clearInterval(tid);
        }

        this.setState(state => {
            return { starStop: this.state.starStop };
        });
    }
    timerAvance() {
        
        let arrTime = this.state.timerText.split(":");
        
        let mm=0;
        let ss = 0;
        let sMM="";
        let sSS="";
        
        if (arrTime[0] != "00" && arrTime[1]=="00") {
            mm = parseInt(arrTime[0]);
            mm--;
            ss = 59;
            sMM = ((mm>9) ? mm.toString() : "0" + mm.toString());
            this.state.timerText = sMM + ":" + ss.toString();
            this.setState(state => {
                return { timerText: state.timerText  };
            });
            return;
        }
        if ( arrTime[1] != "00") {
            sMM = arrTime[0];
            ss = parseInt(arrTime[1]);
            ss--;
            sSS = ((ss>9) ? ss.toString() : "0" + ss.toString());
            this.state.timerText = sMM + ":" + sSS;
            this.setState(state => {
                return { timerText: state.timerText };
            });
            return;
        }
        if (arrTime[0] == "00" && arrTime[1] == "00" && this.state.plusTime == 0) {
            mm = parseInt(this.state.breakValue);
            mm--;
            ss = 59;
            sMM = ((mm > 9) ? mm.toString() : "0" + mm.toString());
            this.state.timerText = sMM + ":" + ss.toString();

            this.state.plusTime = 1;
            this.setState(state => {
                return {
                    timerText: state.timerText,
                    plusTime: state.plusTime
                };
            });
            return;
        }
    }

    handleReset(event) {
        this.setState(state => {
            
            state.breakValue = 5;
            state.sessionValue = 25;
            state.timerText = "25:00";
            return {
                    breakValue: state.breakValue,
                    sessionValue: state.sessionValue,
                    timerText: state.timerText,
                    starStop: 0

                };
        });
    }

    handleClickBreak(event) {
        switch (event.target.value) {
            case "-":
                this.setState(state => {
                    if (state.breakValue>1)
                        state.breakValue--;
                    
                    return { breakValue: state.breakValue };
                    
                });
                break;
            case "+":
                this.setState(state => {
                    if (state.breakValue < 60)
                        state.breakValue++;
                    return { breakValue: state.breakValue };
                });
                break;
        }
    }

    sessionTime(sessionValue) {
            let mm;
            if (sessionValue < 10)
                mm = "0" + sessionValue;
            else
                mm = sessionValue;
            return mm + ":00";
        }

    handleClickSession(event) {
        switch (event.target.value) {
            case "-":
                this.setState(state => {
                    if (state.sessionValue > 1)
                        state.sessionValue--;
                    state.timerText = this.sessionTime(state.sessionValue);
                    return {
                        sessionValue: state.sessionValue,
                        timerText: state.timerText
                    };
                });
                break;
            case "+":
                this.setState(state => {
                    if (state.sessionValue < 60)
                        state.sessionValue++;
                    state.timerText = this.sessionTime(state.sessionValue);
                    return {
                        sessionValue: state.sessionValue,
                        timerText: state.timerText
                    };
                });
                break;
        }
    }

    render() {
        return (
            <div className="clockframe">
                <div className="title">25 + 5 Clock</div>
                <div className="lenght-control">
                    <div id="break-label">Break Length</div>
                    <button className="button-level" id="break-decrement" onClick={this.handleClickBreak} value="-">-</button>
                    <div id="break-length" className="button-level">{this.state.breakValue}</div>
                    <button className="button-level" id="break-increment" onClick={this.handleClickBreak} value="+">+</button>
                </div>
                <div className="lenght-control">
                    <div id="session-label">Session Length</div>
                    <button className="button-level" id="session-decrement" onClick={this.handleClickSession } value="-">-</button>
                    <div id="session-length" className="button-level">{this.state.sessionValue}</div>
                    <button className="button-level" id="session-increment" onClick={this.handleClickSession} value="+">+</button>
                </div>
                <div className="timer">
                    <div id="timer-label">Session</div>
                    <div id="time-left">{this.state.timerText }</div>
                </div>

                <div className="timer-control">
                    <button id="start_stop" onClick={this.handleStartStop }><span id="start">Start</span>-<span id="stop">Stop</span></button>
                    <button id="reset" onClick={this.handleReset }>Reset</button>
                </div>

            </div>
        );
    }
}

const domContainer = document.getElementById("app");

ReactDOM.render(<Clock25 />, domContainer);