import * as buttons from "./elements.js";
import * as actions from "./actions.js"


export function registerControls() {
  buttons.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function'){
      return
    }


    actions[action]()


  })

  buttons.nature.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function'){
      return
    }


    actions[action]()


  })

  buttons.city.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function'){
      return
    }


    actions[action]()


  })
}

