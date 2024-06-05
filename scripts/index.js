import fetchPoem from "./fetchWords.js"
import * as config from './config.js'
import TestText from "./testText.js"
import Timer from "./timer.js"

// PSEUDOCODE
// fetch words
// display words
//
// EventListener(user start typing) ->
// while timer is running
//    highlight current word
//    check for spelling error when typing
//        color red/green character
//
// store user's metrics
// compare metrics and display tendency
// Button for stats ->
//    loads and displays all stats

// async function getData() {
//   const poemLines = await fetchURL()
//   const formattedLines = poemLines.flat()
//   console.log(formattedLines)
// }
async function typingTest() {
  const poem = await fetchPoem()
  const testText = new TestText(poem)
  testText.displayText()

  const timer = new Timer()
  const abortController = new AbortController()

  document.addEventListener('keydown', () => {
    timer.start()
    abortController.abort()
  }, { signal: abortController.signal })

  // while (timer.timeLeft > 0) {
  //   setInterval(log(), 1000)
  //   const log = () => console.log('loop test')
  //   // const typedChar = getTypedChar()
  //   const typedWord = getTypedWord()

  //   const charIsKeybind = keybinds.some(keybind => keybind === typedChar)

  //   if (!charIsKeybind) {
  //     const isCharCorrect = checkChar(typedChar)
  //     highlightChar(isCharCorrect)

  //   }
  // }

}

typingTest()