import * as React from 'react'
import {observer} from 'mobx-react'
import {action, runInAction} from 'mobx'
import InputState from '../models/InputState'
import {II} from '../utils/II'

@observer
export default class Inputs extends React.Component<II<InputState>, {}> {

  constructor(props: II<InputState>) {
    super(props)
  }

  @action
  setUserName = (value: string) => {
    this.props.m.username = value
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ e => this.setUserName(e.target.value) }/>
        {this.props.m.username}
      </div>
    )
  }

}
