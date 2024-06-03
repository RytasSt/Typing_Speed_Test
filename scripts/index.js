// Main js file. Write pseudocode here

import fetchURL from "./fetchWords.js"

document.querySelector('h1').addEventListener('click', fetchURL)

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