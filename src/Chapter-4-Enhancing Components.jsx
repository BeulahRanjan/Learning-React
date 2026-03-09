/*===================================================================================
 Chapter-3 
 Ehancing Components – Explains improving React components by using lifecycle methods, 
 higher-order components, external libraries, and state management techniques.
 ====================================================================================*/

 /*
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
 */