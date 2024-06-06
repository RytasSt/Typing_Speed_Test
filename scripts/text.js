import * as config from './config.js'

export default class Text {
  constructor(poem) {
    this.poem = poem
    this.cleanedPoem = null
  }

  displayText() {
    this.cleanedPoem = this.cleanPoem(this.poem)
    const container = document.querySelector('.test-text')
    container.innerHTML = ''

    this.cleanedPoem.forEach(line => {
      const lineWords = line.split(' ')

      lineWords.forEach(word => {
        const wordDiv = this.createWordDiv(word)
        container.appendChild(wordDiv)
      })

    })
  }

  createWordDiv(word) {
    const wordDiv = document.createElement('div')
    wordDiv.className = 'word'

    const letters = Array.from(word)

    letters.forEach(letter => {
      const letterDiv = this.createLetterDiv(letter)
      wordDiv.appendChild(letterDiv)
    })
    // add 'spacebar' between words
    wordDiv.appendChild(this.createLetterDiv(''))

    return wordDiv
  }

  createLetterDiv(letter) {
    const letterDiv = document.createElement('div')
    letterDiv.className = 'letter'

    const letterDivContent = document.createTextNode(letter)
    letterDiv.appendChild(letterDivContent)

    return letterDiv
  }

  cleanPoem(poem) {
    return poem[0].lines
      .map(line => line.trim())
      .filter(line => line !== '')
      .slice(0, config.maxLines)
      .map(line => line.replace(/\s{2,}/gm, ' ')) // reduce whitespaces inside lines to one
  }
}
