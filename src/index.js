// import React from "react";
import ReactDOM from "react-dom";
import App from "./Main.js";

var React        = require('react')
var Form = require('./components/Form.jsx')

window.onload = function() {
  ReactDOM.render(
    <Form />,
    document.querySelector('#root')

  )
}