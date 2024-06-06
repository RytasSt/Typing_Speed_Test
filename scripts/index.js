import fetchPoem from "./fetchWords.js"
import * as config from './config.js'
import Text from "./text.js"
import Timer from "./timer.js"
import Inputs from "./inputs.js"

async function typingTest() {
  const poem = await fetchPoem()
  const text = new Text(poem)
  text.displayText()

  const timer = new Timer()
  const abortController = new AbortController()

  document.addEventListener('keydown', () => {
    timer.start()
    abortController.abort()
  }, { signal: abortController.signal })

  const inputs = new Inputs(text.cleanedPoem)
  inputs.initializeTest()

}

typingTest()