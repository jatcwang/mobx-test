import * as React from 'react'
import {observer} from 'mobx-react'
import {Base} from '../models/Base'
import Text from './Text'
import {logg} from '../myutils'

interface Props {
  appState: Base
  anotherName: string
}

let i = 0

@observer
class GrandChild extends React.Component<Props, {}> {

  render() {
    logg("Grand render() starting")
    return (
      <div>
        Grand:
        <Text name={this.props.appState.name + " in grand"}/>
      </div>
    )
  }

  componentDidUpdate() {
    logg("Grand render() post")
  }

}

// export default patchShouldComponentUpdate(observer(GrandChild), () => {
//   logg("GrantChild " + i.toString() + " ")
//   i = i + 1
// })

export default GrandChild
