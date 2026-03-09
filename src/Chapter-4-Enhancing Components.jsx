/*===================================================================================
 Chapter-3 
 Ehancing Components – Explains improving React components by using lifecycle methods, 
 higher-order components, external libraries, and state management techniques.
 ====================================================================================*/

 /*
======================
Component Lifecycles
======================
The component lifecycle consists of methods that are invoked in series when a com‐
ponent is mounted or updated. These methods are invoked either before or after the
component renders the UI. In fact, the render method itself is a part of the compo‐
nent lifecycle. There are two primary lifecycles: the mounting lifecycle and the updat‐
ing lifecycle.

 What is Mounting?
 ->In React, mounting refers to the moment when a component is created and inserted into the DOM (Document Object Model) for the first time.

Simple Meaning

Mounting = When a React component appears on the screen for the first time.

It is the initial phase of a component’s lifecycle.

function Welcome() {
  return <h1>Hello World</h1>;
}

When this component is rendered like this:
ReactDOM.render(<Welcome />, document.getElementById("root"));

The Welcome component is mounted, meaning:
- React creates the component instance
- React renders the JSX
- React adds it to the DOM
The user sees it on the webpage

In modern React with Hooks, mounting behavior is handled using useEffect.
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello</h1>;
}

The empty dependency array [] means run only once when the component mounts.

==============================
Mounting Lifecycle
==============================

The mounting lifecycle consists of methods that are invoked when a component is
mounted or unmounted.

What does mounting allows us to do?
->these methods allow you to initially set up
state, make API calls, start and stop timers, manipulate the rendered DOM, initialize
third-party libraries, and more.
These methods allow you to incorporate JavaScript to
assist in the initialization and destruction of a component.

The mounting lifecycle is slightly different depending upon whether you use ES6
class syntax or React.createClass to create components. When you use
createClass, getDefaultProps is invoked first to obtain the component’s proper‐
ties. Next, getInitialState is invoked to initialize the state.

ES6 classes do not have these methods. Instead, default props are obtained and sent
to the constructor as an argument. The constructor is where the state is initialized.
Both ES6 class constructors and getInitialState have access to the properties and,
if required, can use them to help define the initial state.

Table 7-1. The component mounting lifecycle
_______________________________________________
|    ES6 class          |React.createClass()   |
|_______________________|______________________|
|                       | getDefaultProps()    |
|constructor(props)     | getInitialState()    |
|componentWillMount()   |componentWillMount()  |
|render()               |render()              |
|componentDidMount()    |componentDidMount()   |
|componentWillUnmount() |componentWillUnmount()|
|_______________________|______________________|

Once the properties are obtained and state is initialized, the componentWillMount
method is invoked. This method is invoked before the DOM is rendered. It is possible
to invoke setState from this method to change the component state just before the
component is initially rendered.


 */