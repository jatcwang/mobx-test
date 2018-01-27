import * as React from 'react'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import { Fragment } from 'react'
import {Base} from '../models/Base'
import Child from './Child'
import Text from './Text'
import {logg} from '../myutils'

interface Props {
  appState: Base
}

let i = 0

@observer
class App extends React.Component<Props, {}> {

  click = (): void => {
    this.props.appState.changeName("lol")
  }

  render() {
    logg("App render() starting")
    return <Fragment>
      <button onClick={this.click}>Click</button>
      <Text name={this.props.appState.name + " in app"} />
      {this.props.appState.timer.age.toString()}
      <Child appState={this.props.appState}/>
      <DevTools />
    </Fragment>
  }

  componentDidUpdate() {
    logg("App render() post")
  }

}

export default App
