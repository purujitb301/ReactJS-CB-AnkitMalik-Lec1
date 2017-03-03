// var React = require('react');
import * as React from "react"


// var ReactDOM = require('react-dom');

import * as ReactDOM from "react-dom"

//Create a React component for our hello world

class HelloComponent extends React.Component {
    render() {
        return <div>Hello World from React </div>;
    }
}
var my_hello_world_object= <HelloComponent/>;

var node = document.getElementById("app");


ReactDOM.render(my_hello_world_object, node);