import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './app'
import * as serviceWorker from './serviceWorker'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
