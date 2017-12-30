import * as React from 'react'
import {observer} from 'mobx-react'
import AppState from '../models/AppState'
import TimerView from './TimerView'
import DevTools from 'mobx-react-devtools'
import { Fragment } from 'react'

@observer
class App extends React.Component<{appState: AppState}, {}> {
  render() {
    return <Fragment>
      <TimerView m={this.props.appState} />
      <DevTools />
    </Fragment>
  }

}

export default App
