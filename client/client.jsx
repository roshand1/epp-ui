import React from 'react' // This is same as var React = require('react')
import { render } from 'react-dom'  // var render = require('react-dom').render;
import App from '../components/App'
import store from '../redux/store'
import { Provider } from 'react-redux'

const clientApp = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <App practiceModel={store.getState().practiceModel} />
            </Provider>
        );
    }
})
export default clientApp;