/*
==================================================
REACT ROOT RENDERING – FUNDAMENTAL NOTES
==================================================
This file demonstrates how React renders an element
without using JSX.
==================================================
*/


/* ==================================================
 IMPORTS
================================================== */

// React 18+ rendering API
import { createRoot } from "react-dom/client";

// Required when using React.createElement
import React from "react";


/* ==================================================
   WHY DO WE IMPORT createRoot?
==================================================

- createRoot is used to connect React to the DOM.
- It allows React to render content inside a specific HTML element.
- Required in React 18+.
- Enables modern features like Concurrent Rendering.

Old method (before React 18):
  ReactDOM.render(<App />, document.getElementById("root"));

New method (React 18+):
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
*/


/* ==================================================
   WHAT IS THE "root" ID?
==================================================

- The "root" id comes from index.html.
- It is just an empty container div.

Example (index.html):

  <div id="root"></div>

- React does NOT create this div.
- React only fills it with UI content.
- The name "root" can be changed to anything.

Example:
  <div id="myApp"></div>

Then:
  createRoot(document.getElementById("myApp"));
*/


/* ==================================================
  CONNECT REACT TO THE ROOT CONTAINER
================================================== */

// Select the container from index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// It tells React:

// “Render the App component inside the DOM container that was passed to createRoot().”

<h1 data-reactroot id="recipe-0" data-type="title">Baked Salmon</h1>
// ReactDOM allows you to render a single element to the DOM.6
//  React tags this as
// data-reactroot. All other React elements are composed into a single element using
// nesting.
// React renders child elements using props.children. In the previous section, we ren‐
// dered a text element as a child of the h1 element, and thus props.children was set to
// "Baked Salmon". We could render other React elements as children too, creating a
// tree of elements. This is why we use the term component tree. The tree has one root
// component from which many branches grow.ReactDOM allows you to render a single element to the DOM.6
//  React tags this as
// data-reactroot. All other React elements are composed into a single element using
// nesting.
// React renders child elements using props.children. In the previous section, we ren‐
// dered a text element as a child of the h1 element, and thus props.children was set to
// "Baked Salmon". We could render other React elements as children too, creating a
// tree of elements. This is why we use the term component tree. The tree has one root
// component from which many branches grow.
//appears in the browser, showing that React has successfully rendered the element inside the root container.
//data-reactroot is an internal attribute added by React int the root element to indicate that this element is managed by React

/* ==================================================
 React.createElement EXPLANATION
==================================================

Syntax:
  React.createElement(type, props, children)

type      → HTML tag name (e.g., "h1")
props     → Object containing attributes
children  → Content inside the element

Example below creates:

  <h1 id="recipe-0" data-type="title">
     Baked Salmon
  </h1>
*/


/* ==================================================
    RENDERING TO THE DOM
================================================== */

root.render(
  React.createElement(
    "h1",
    {
      id: "recipe-0",        // Standard HTML attribute
      "data-type": "title"   // Custom data attribute
    },
    "Baked Salmon"           // Text content
  )
);


/* ==================================================
WHAT HAPPENS INTERNALLY?
==================================================

1. React.createElement creates a Virtual DOM object.
2. React prepares it for rendering.
3. React updates the real DOM efficiently.
4. The browser displays the final HTML.

Before rendering:
  <div id="root"></div>

After rendering:
  <div id="root">
      <h1 id="recipe-0" data-type="title">
          Baked Salmon
      </h1>
  </div>

React controls everything inside the root container.
*/


/*
==================================================
NOTE:
- No App component is defined here.
- Therefore, DO NOT export App.
- This file directly renders a React element.
==================================================
*/
//So, a React element is just a JavaScript literal that tells React how to construct the DOM element.

/*When you write:

<h1>Hello</h1>


React actually creates this object:

{
  $$typeof: Symbol(React.element),
  type: "h1",
  props: { children: "Hello" }
}


That object is called a React Element.
$$typeof

It is a special internal property used by React

It tells React:

"This object is a React Element."
The type property of the React element tells React what type of HTML or SVG ele‐
ment to create. The props property represents the data and child elements required to
construct a DOM element. The children property is for displaying other nested ele‐
ments as text.


We can render a React element, including its children, to the DOM with
ReactDOM.render. The element that we wish to render is passed as the first argu‐
ment and the second argument is the target node, where we should render the ele‐
ment:*/
var dish = React.createElement("h1", null, "Baked Salmon")
ReactDOM.render(dish, document.getElementById('react-container'))
// Rendering the title element to the DOM would add a heading-one element to the div with the id of react-container, which we would already have defined in our HTML.
/*All of the DOM rendering functionality in React has been moved to ReactDOM
because we can use React to build native applications as well. The browser is just one
target for React.
 */

