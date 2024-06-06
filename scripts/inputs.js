export default class Inputs {
  constructor(poem) {
    this.poem = poem
    this.testData = ''
    this.typedChars = ''
  }

  async initializeTest() {
    this.testData = this.stringifyText()

    document.addEventListener('keydown', event => {
      const pressedKey = event.key
      this.testUserChar(pressedKey)
      this.updateCaret()
      console.log(this.typedChars)
      console.log(this.testData)
    })
  }

  stringifyText() {
    return this.poem.join(' ')
  }

  testUserChar(pressedKey) {
    // Correct
    if (this.testData[0] === pressedKey) {
      this.typedChars += this.testData[0]
      this.testData = this.testData.slice(1)
      this.styleLetter('correct')

    // Incorrect
    } else if (pressedKey.length === 1 && this.testData[0] !== pressedKey) {
      this.typedChars += this.testData[0]
      this.testData = this.testData.slice(1)
      this.styleLetter('incorrect')

      // Backspace
    } else if (pressedKey === 'Backspace' && this.typedChars.length > 0) {
      this.testData = this.typedChars.at(-1) + this.testData
      this.typedChars = this.typedChars.slice(0, -1)
      this.unstyleLetter()
    }
  }


  styleLetter(className) {
    document.querySelector('.letter:not(.correct, .incorrect)').classList.add(className)
  }

  unstyleLetter() {
    const testedLetters = document.querySelectorAll('.letter.correct, .letter.incorrect')

    const lastTestedLetter = testedLetters[testedLetters.length - 1]
    lastTestedLetter.classList.remove('correct', 'incorrect')
  }

  updateCaret() {
    document.querySelectorAll('.letter').forEach(element => {
      element.classList.remove('caret')
    })

    const untestedLetters = document.querySelectorAll('.letter:not(.correct, .incorrect)')
    const firstUntestedLetter = untestedLetters[0]

    firstUntestedLetter.classList.add('caret')
  }


}