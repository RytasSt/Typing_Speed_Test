import * as config from './config.js'

export default class Timer {
  constructor() {
    this.timeLeft = config.timerLength
  }

  start() {
    const intervalId = setInterval(() => this.updateTimer(intervalId), 1000)
    // setTimeout(console.log(this.timeLeft), 2000)
  }

  updateTimer(intervalId) {
    if (this.timeLeft > 0) {
      this.reduceBySecond()
      this.updateTimerDom()
    } else {
      clearInterval(intervalId)
    }
  }

  reduceBySecond() {
    this.timeLeft -= 1
  }

  updateTimerDom() {
    document.querySelector('.time-left').innerText = this.timeLeft
  }
  // get time() {
  //   return this.timeLeft
  // }
}