import {action, observable, runInAction} from 'mobx'
import InputState from './InputState'

export default class AppState {
  @observable timer = 0;
  @observable inputState: InputState = InputState.DEFAULT()

  constructor() {
    setInterval(() => {
      runInAction(() => {
        this.timer += 1
      })
    }, 1000)
  }

  @action
  resetTimer() {
    this.timer = 0;
  }
}
