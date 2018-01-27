import * as React from 'react'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import {Fragment} from 'react'
import {Base} from '../models/Base'
import GrandChild from './Grandchild'
import Text from './Text'
import {logg} from '../myutils'

interface Props {
  appState: Base
}

let i = 0

@observer
class Child extends React.Component<Props, {}> {

  render() {

    logg("Child render() starting")
    const {appState} = this.props
    return (
      <div>
        <Text name={this.props.appState.name + " in child"}/>
        <GrandChild appState={appState} anotherName={appState.name}/>
      </div>
    )
  }

  componentDidUpdate() {
    logg("Child render() post")
  }


}

export default Child
// export default patchShouldComponentUpdate(observer(Child), () => {
//   logg("child " + i.toString() + " ")
//   i = i + 1
// })
