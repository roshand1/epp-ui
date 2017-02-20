import React from 'react' // This is same as var React = require('react')
import {render} from 'react-dom'  // var render = require('react-dom').render;
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

const store = configureStore()
render(
    <Provider store={store}>
    <App/>
      </Provider>,
    document.getElementById('app')//DOM element we want to mount it to
)