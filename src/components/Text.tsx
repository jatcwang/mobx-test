import * as React from 'react'
import {observer} from 'mobx-react'

interface Prop {
  name: string
}

@observer
class Text extends React.Component<Prop, {}> {

  render() {
    return (
      <span>
        {this.props.name}
      </span>
    )
  }

}

// function trapEs6(obj: any, handler: any) {
//
//
// }
//
// const handler = {
//   get(target: any, name: any, receiver:any): any {
//
//     console.log("get: " + name)
//     // shouldComponentUpdate(nextProps: any, nextState: any): any {
//     //   debugger
//     //   logg("Text SCU: " + nextProps.name)
//       // return (this as any).prototype.shouldComponentUpdate(nextProps, nextState).bind(this)
//     // }
//     return Reflect.get(target, name, receiver)
//   },
//
// }

export default Text

