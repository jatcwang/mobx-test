import {action, computed, observable} from 'mobx'

export default class InputState {
  @observable username: string
  @observable password: string

  static DEFAULT(): InputState { return new InputState("", "") }

  constructor(username: string, pw: string) {
    this.username = username
    this.password = pw
  }

  @computed get combined() {
    return this.username + this.password
  }

}
