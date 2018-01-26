import * as React from 'react'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import { Fragment } from 'react'
import {Base} from '../models/Base'

@observer
class App extends React.Component<{appState: Base}, {}> {

  click = (): void => {
    this.props.appState.changeName("lol")
  }

  render() {
    return <Fragment>
      <button onClick={this.click}>Click</button>
      {this.props.appState.name}
      {this.props.appState.timer.age}
      <DevTools />
    </Fragment>
  }

}

export default App
