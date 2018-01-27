import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {runInAction, useStrict} from 'mobx';
import App from './components/App'
import {BaseModel, TimerModel} from './models/Base'
import {logg} from './myutils'

const appState = BaseModel.create({
  name: "jacob",
  timer: TimerModel.create({age: 0}),
})

setInterval(() => {
  runInAction(() => {
    appState.timer.addAge()
    logg("===")
  })
}, 1000)

function renderApp(ele: any) {
  // ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
  ReactDOM.render(React.createElement(ele, {appState}, null), document.getElementById('root'));
}

useStrict(true)
renderApp(App)

declare let module: any
declare let require: any

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    const newapp = require('./components/App')
    renderApp(newapp.default)
  })

}
