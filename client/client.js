import React from 'react' // This is same as var React = require('react')
import {render} from 'react-dom'  // var render = require('react-dom').render;
import App from '../components/App'
render(
    <App/>,//define the encompassing component,
    document.getElementById('app')//DOM element we want to mount it to
)