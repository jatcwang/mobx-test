import * as React from 'react'
import {observer} from 'mobx-react'
import { action } from 'mobx'
import AppState from '../models/AppState'
import Inputs from './Inputs'
import {II} from '../utils/II'

@observer
export default class TimerView extends React.Component<II<AppState>, {}> {

  constructor(props: II<AppState>) {
    super(props)
  }

  render() {
    return (
      <div>
        <Inputs m={ this.props.m.inputState }/>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.m.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.m.resetTimer();
  }
}
