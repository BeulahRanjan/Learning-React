/*
==================================================
PURE REACT – FUNDAMENTALS (UP TO CHILDREN)
==================================================
This file demonstrates how React works internally
without using JSX.
==================================================
*/


/* ==================================================
 IMPORTS
================================================== */

// React 18+ Rendering API
import { createRoot } from "react-dom/client";

// Required for React.createElement
import React from "react";


/* ==================================================
 PAGE SETUP (HTML CONNECTION)
==================================================

index.html must contain a container element:

  <div id="root"></div>

Important:
- React does NOT create this div.
- React only controls what goes inside it.
- The id name can be anything (e.g., "app", "main").

Example:
  <div id="myApp"></div>

Then:
  createRoot(document.getElementById("myApp"));
*/


/* ==================================================
 CONNECTING REACT TO THE DOM
================================================== */

// Select the container
const root = createRoot(document.getElementById("root"));

/*
What createRoot() does:

- Connects React to a specific DOM container.
- Returns a React Root object.
- Enables modern React 18 features.

Old way (before React 18):
  ReactDOM.render(<App />, container)

New way:
  const root = createRoot(container);
  root.render(<App />);
*/


/* ==================================================
REACT ELEMENTS
==================================================

A React element is a plain JavaScript object that
describes what should appear on the screen.

When you write:

  <h1>Hello</h1>

React actually creates:

{
  $$typeof: Symbol(React.element),
  type: "h1",
  props: { children: "Hello" }
}

Important properties:

- $$typeof → Identifies it as a React element
- type     → HTML tag or Component
- props    → Attributes + children
*/


/* ==================================================
 React.createElement()
==================================================

Syntax:
  React.createElement(type, props, children)

type      → HTML tag name (e.g., "h1")
props     → Object containing attributes
children  → Content inside the element
*/


/* ==================================================
RENDERING TO THE DOM
==================================================

React only displays something when we call:

  root.render(element)

Example:
*/

root.render(
  React.createElement(
    "h1",
    {
      id: "recipe-0",
      "data-type": "title"
    },
    "Baked Salmon"
  )
);

/*
Before rendering:
  <div id="root"></div>

After rendering:
  <div id="root">
    <h1 id="recipe-0" data-type="title">
      Baked Salmon
    </h1>
  </div>
*/


/* ==================================================
VIRTUAL DOM (Concept)
==================================================

1. React.createElement creates a Virtual DOM object.
2. React compares it with the previous version.
3. React updates only the changed parts.
4. Browser updates efficiently.

This makes React fast.
*/



/* ==================================================
CHILDREN
==================================================

Every additional argument passed after props
becomes a child element.

React stores children inside:

  props.children

Example:
*/

const ingredients = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "1 lb Salmon"),
  React.createElement("li", null, "1 cup Pine Nuts"),
  React.createElement("li", null, "2 cups Butter Lettuce"),
  React.createElement("li", null, "1 Yellow Squash"),
  React.createElement("li", null, "1/2 cup Olive Oil"),
  React.createElement("li", null, "3 cloves of Garlic")
);

/*
Here:
- "ul" is the root element.
- The six "li" elements are its children.
- React automatically creates an array of children.
- That array is stored in props.children.
*/

// To display it:
root.render(ingredients);



/* ==================================================
 CONSTRUCTING ELEMENTS WITH DATA
==================================================

One major advantage of React is separating data from UI.

Instead of hardcoding list items manually,
we can store the data in a JavaScript array
and dynamically generate UI elements from it.

Example: Storing data in an array
*/

const items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"
];

/*
We can use Array.map() to convert each item
into a React element.
*/

const ingredientsList = React.createElement(
  "ul",
  { className: "ingredients" },
  items.map((ingredient, i) =>
    React.createElement("li", { key: i }, ingredient)
  )
);

/*
Why use map()?

- It creates one <li> for each item in the array.
- Keeps UI dynamic and reusable.
- Separates data from structure.

Why is "key" needed?

- React requires a unique key for each element in a list.
- Keys help React efficiently update the DOM.
- The key should be unique.
- Here, we use the array index (i) as a simple key.

Important:
Keys are used internally by React.
They are NOT displayed in the UI.
*/

/*
To render:
root.render(ingredientsList);
*/
