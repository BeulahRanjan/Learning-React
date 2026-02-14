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

/* ==================================================
 REACT COMPONENTS
==================================================

Every user interface is made up of smaller parts.

In React, each part of the UI is called a "Component".

Each section of the UI (title, ingredients, instructions)
can be built as a reusable component.
*/


/* 
WHY COMPONENTS ARE IMPORTANT ?
1. Reusability
   - Write once, use many times.
   - Same structure can display different data.

2. Scalability
   - Whether we display 1 recipe or 10,000 recipes,
     we simply create more instances of the component.

3. Organization
   - Break large UI into smaller, manageable pieces.
   - Makes code easier to read and maintain.

4. Separation of Concerns
   - Each component handles its own structure and logic.
*/


/* 
THINKING IN COMPONENTS
When building a UI:

✔ Look for repeated patterns.
✔ Break the UI into reusable pieces.
✔ Turn each piece into a component.


This creates a component tree.
*/


/*
THREE WAYS TO CREATE COMPONENTS
==================================================
- CreateClass (Older method)
==================================================
When React was introduced in 2013, the ONLY way to
create components was using React.createClass().

Even though newer methods exist today, many older
React codebases still use createClass.

NOTE:
- React team has indicated createClass may be
  deprecated in the future.
- Still important for understanding legacy React.
*/


/* 
CREATING A COMPONENT WITH createClass

A React component is an object that describes
a reusable piece of UI.

Below is an IngredientsList component that renders
a <ul> with <li> children.
*/

const IngredientsList = React.createClass({
  displayName: "IngredientsList",

  render() {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      React.createElement("li", null, "1 lb Salmon"),
      React.createElement("li", null, "1 cup Pine Nuts"),
      React.createElement("li", null, "2 cups Butter Lettuce"),
      React.createElement("li", null, "1 Yellow Squash"),
      React.createElement("li", null, "1/2 cup Olive Oil"),
      React.createElement("li", null, "3 cloves of Garlic")
    );
  }
});


/* 
RENDERING A COMPONENT

- Components are rendered just like elements.
- The component itself becomes the element type.
*/

const list = React.createElement(IngredientsList, null, null);

ReactDOM.render(
  list,
  document.getElementById("react-container")
);


/*
USING PROPS TO PASS DATA

Components become reusable when we pass data
to them using props.

Inside createClass:
- "this" refers to the component instance.
- Data passed in is available as this.props.
*/

// const IngredientsList = React.createClass({
//   displayName: "IngredientsList",

//   render() {
//     return React.createElement(
//       "ul",
//       { className: "ingredients" },
//       this.props.items.map((ingredient, i) =>
//         React.createElement("li", { key: i }, ingredient)
//       )
//     );
//   }
// });


/* 
PASSING DATA INTO COMPONENT

const items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"
];

ReactDOM.render(
  React.createElement(IngredientsList, { items }, null),
  document.getElementById("react-container")
);


/* 
WHY DO WE USE "key"?
- When rendering lists using map(),
  React requires a unique "key" for each child.
- Keys help React update the DOM efficiently.
- Here, the array index is used as the key.
*/


/* 
COMPONENTS ARE OBJECTS

- Components encapsulate UI logic and structure.
- They behave like classes.
- Methods can be added to organize rendering logic.
*/


/*
USING A CUSTOM METHOD

Instead of writing logic directly inside render(),
we can create helper methods.
*/

// const IngredientsList = React.createClass({
//   displayName: "IngredientsList",

//   renderListItem(ingredient, i) {
//     return React.createElement("li", { key: i }, ingredient);
//   },

//   render() {
//     return React.createElement(
//       "ul",
//       { className: "ingredients" },
//       this.props.items.map(this.renderListItem)
//     );
//   }
// });
//React calls render(), and during its execution, map() invokes renderListItem() multiple times to create child elements.

/* 
WHY THIS IS BETTER

✔ Cleaner render() method
✔ Better readability
✔ Easier maintenance
✔ Clear separation of concerns
✔ Scales better for large apps
*/


/*
COMPONENT CLASSES AS TYPES


When creating elements:

- HTML/SVG elements → use strings
  React.createElement("ul")

- Components → use the component class directly
  React.createElement(IngredientsList)

This is why IngredientsList is NOT in quotes.

React:
- Creates an instance of the component
- Manages its lifecycle
- Calls render() internally
*/


/* 
FINAL OUTPUT IN THE DOM
<ul data-react-root class="ingredients">
  <li>1 lb Salmon</li>
  <li>1 cup Pine Nuts</li>
  <li>2 cups Butter Lettuce</li>
  <li>1 Yellow Squash</li>
  <li>1/2 cup Olive Oil</li>
  <li>3 cloves of Garlic</li>
</ul>
*/


/*==================================================
ES6 CLASS COMPONENTS (SHORT NOTES)
==================================================

ES6 introduced classes in JavaScript.
React uses these classes to create components by
extending React.Component.
*/


/* 
CREATING A COMPONENT

class IngredientsList extends React.Component {

  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient);
  }

  render() {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      this.props.items.map(this.renderListItem)
    );
  }
}


/* 
KEY POINTS
- Components extend React.Component
- render() is mandatory
- render() must return a React element
- this.props contains data passed to the component
- Helper methods keep render() clean
*/


/* 
- ES6 classes do NOT auto-bind "this"
- Binding is required if helper methods use "this"
*/


/* ==================================================
STATELESS FUNCTIONAL COMPONENTS 
==================================================

Stateless functional components are simple JavaScript
functions that take props and return React elements.

They are NOT objects, so they do not have:
- this
- state
- lifecycle methods
*/


/*
KEY CHARACTERISTICS

- Pure functions
- Take props as input
- Return UI (React elements)
- No side effects
- Very easy to test
- Keep application architecture simple
*/


/* 
WHY USE THEM?

✔ Cleaner and simpler syntax
✔ Encourages functional programming
✔ Better readability
✔ Promised performance benefits
✔ Preferred whenever state is not needed
*/


/* 
EXAMPLE
const IngredientsList = props =>
  React.createElement(
    "ul",
    { className: "ingredients" },
    props.items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );


/* 
USING DESTRUCTURING

Destructuring removes repetitive dot notation.
*/

// const IngredientsList = ({ items }) =>
//   React.createElement(
//     "ul",
//     { className: "ingredients" },
//     items.map((ingredient, i) =>
//       React.createElement("li", { key: i }, ingredient)
//     )
//   );


/* ==================================================
IMPORTANT NOTES
==================================================

- Use const to define functional components
- const prevents accidental reassignment
- Cannot be used when "this" or state is required
- Fall back to class components if needed
*/

// ==============================================
//  DOM Rendering in React 
// ============================================

// React separates data (state/props) from the DOM. When application data changes, React re-renders the UI 
// using ReactDOM.render. Instead of rebuilding the entire DOM, React compares the new data with the previous 
// data and updates only the DOM elements that changed. This minimizes expensive DOM insertions and makes UI updates 
// fast and efficient.

