 const serverSide = require('../dist/eppserverSideRender.js');
//const clientApp = require('../dist/bundle');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
//const App = require('../components/App.js');
const store =require('../redux/store');
const Provider =require('react-redux');
//const testComponent = require('./clientApp.jsx')

exports.handler = function(event, context, callback) {
 console.log("entered function");
//  var model={"titleText":"About Us","icon":"info","titleColor":"teal","href":"#aboutUs","coinOpts":{"inverse":true,"size":"sm"},"isPremium":true};
//  var element = React.createFactory(testComponent)(model);
//  var result = ReactDOMServer.renderToString(element);
var element = React.createFactory(Provider)(store);
var result = ReactDOMServer.renderToString(element);
 /*const result1 = ReactDOMServer.renderToString(
      <Provider store={store}>
      <App />
    </Provider>
 );*/
 var result={};
 context.succeed(result);
};
var context1={};
context1.succeed=function(result)
{

};
exports.handler(null,context1,null)