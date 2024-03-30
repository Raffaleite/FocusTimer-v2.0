import state from './state.js'
import * as timer from "./timer.js"
import * as el from './elements.js'
import * as sounds from "./sounds.js"



export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
}


export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function add() {
  let minutes = Number(el.minutes.textContent)
  minutes = minutes + 5
  if(minutes <= 60) {
  timer.updateDisplay(minutes)
  }
}

export function subtract() {
  let minutes = Number(el.minutes.textContent)
  minutes = minutes - 5
  if(minutes > 0) {
  timer.updateDisplay(minutes)
  }
}

export function toggleMusicTree() {
  state.isFlorest = document.documentElement.classList.toggle('florest-on')
  if(state.isFlorest){
    sounds.florestAudio.play()
    return
  }
  sounds.florestAudio.pause()
}

export function toggleMusicRain() {
  state.isRain = document.documentElement.classList.toggle('rain-on')
  if(state.isRain){
    sounds.rainAudio.play()
    return
  }
  sounds.rainAudio.pause()
}

export function toggleMusicFire() {
  state.isFire = document.documentElement.classList.toggle('fire-on')
  if(state.isFire){
    sounds.fireAudio.play()
    return
  }
  sounds.fireAudio.pause()
}

export function toggleMusicStore() {
  state.isCoffe = document.documentElement.classList.toggle('coffee-on')
  if(state.isCoffe){
    sounds.coffeAudio.play()
    return
  }
  sounds.coffeAudio.pause()
}