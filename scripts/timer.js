import * as config from './config.js'

export default class Timer {
  constructor() {
    this.timeLeft = config.timerLength
  }

  start() {
    setInterval(() => this.reduceBySecond(), 1000)
    // setTimeout(console.log(this.timeLeft), 2000)
  }

  reduceBySecond() {
    this.timeLeft -= 1
    console.log(this.timeLeft)
  }

  // get time() {
  //   return this.timeLeft
  // }
}