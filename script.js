var pomodoro = {
    started : false,
    minutes : 0,
    seconds : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    audio : null,

    init : function(){
      var self = this;
      this.audio = document.getElementById("alarm");
      this.minutesDom = document.querySelector('#minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.querySelector('#startTime').onclick = function(){
        self.startTime.apply(self);
      };
      document.querySelector('#shortBreak').onclick = function(){
        self.startShortBreak.apply(self);
      };
      document.querySelector('#longBreak').onclick = function(){
        self.startLongBreak.apply(self);
      };

    },

    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
    },
    startTime: function() {
      this.resetVariables(25, 00, true);
    },
    startShortBreak : function(){
      this.resetVariables(5, 00, true);
    },
    startLongBreak : function(){
      this.resetVariables(15, 00, true);
    }, 

    
    // to finish the counter with 00 : 00 format

    toDoubleDigit : function(num){
        if(num < 10) {
          return "0" + parseInt(num, 10);
        }
        return num;
      },
    
    // 00 : 00 time format
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
        audio.play();
      this.started = false;
    }

    
};
window.onload = function(){
  pomodoro.init();
};


//Here I was experimenting with cookies function. I don't know how it works yet
let x = document.cookie;



//To call the alarm file 
let src = 'alarm.mp3';
let audio = new Audio(src);



  