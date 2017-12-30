import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {action, observable, runInAction, useStrict} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import AppState from './models/AppState'
import App from './components/App'


const appState = new AppState();

function renderApp(ele: any) {
  // ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
  ReactDOM.render(React.createElement(ele, { appState }, null), document.getElementById('root'));
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
