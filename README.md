### Chapter-1- Pure React
  ## Page Setup
  - Setting up a basic HTML page and connecting React using createRoot().
  ## The Virtual DOM
  - How React creates a lightweight JavaScript representation of the DOM and updates efficiently.
  ## React Elements
  - React elements are plain JavaScript objects that describe UI.
    - Example:React.createElement("h1", null, "Hello")
  ## ReactDOM
  - Responsible for rendering React elements into the real DOM.
  ## Children
  - Elements nested inside other elements.
    - Example:
      React.createElement("ul", null,
      React.createElement("li", null, "Item 1")
)
  ##  Constructing Elements with Data
  - Using arrays and dynamic data to generate UI.
  ## React Components
  - Reusable building blocks of React applications.
  ## createClass
  Older way of creating components (before ES6 classes).
  ##  ES6 Classes
  - Class-based components using modern JavaScript syntax.
  ## Stateless Functional Components
  - Functions that return UI. Simpler and widely used today.
  ## DOM Rendering
  - Using createRoot() and root.render() to display components.
  ## Factories
  - Older pattern for creating React elements without JSX.