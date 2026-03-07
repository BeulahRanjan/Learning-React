/*===================================================================================
 Chapter-3 
 Props, State, and the Component Tree – Explains how data flows in React using props, 
 state, and hierarchical component structure.
 ====================================================================================*/


 
// ==============================
// Property Validation in React
//===============================

// JavaScript is loosely typed, meaning a variable’s type can change at any time (for example, from a string to an array).
// This flexibility can lead to bugs if incorrect data types are passed to components. To prevent this, React provides property
// validation (PropTypes), which allows developers to specify the expected data type of each prop (such as string, array,
// number, boolean, etc.). If the wrong type is passed, React shows a warning in development mode. This helps catch
// errors early, reduces debugging time, and ensures components receive the correct data. The way property validation 
// implemented depends on whether the component is created using React.createClass, ES6 classes, or functional components.


//=====================================
// Validating Props with createClass
//=====================================
// Property validation in React ensures that components receive the correct type of data through props. 
// Since JavaScript is loosely typed, passing the wrong type (like a string instead of an array) may not throw an 
// immediate error but can cause logical bugs. Using PropTypes, we can define expected data types and even mark them as required. 
// This helps React show warnings in development, making debugging easier.

// Example:
// const Summary = createClass({
//   propTypes: {
//     ingredients: PropTypes.array.isRequired,
//     steps: PropTypes.array.isRequired,
//     title: PropTypes.string
//   },
//   render() {
//     const { ingredients, steps, title } = this.props
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>{ingredients.length} Ingredients | {steps.length} Steps</p>
//       </div>
//     )
//   }
// })

// If someone passes a string instead of an array:

// <Summary
//   title="PBJ"
//   ingredients="peanut butter, jelly, bread"
//   steps="spread and eat"
// />

// React will show a warning, helping us detect the bug early.

// ==============================
// Default Props 
// ==============================

// Default props in React are used to provide fallback values when a component does not receive certain properties. 
// This prevents errors and ensures the component still renders meaningful output even if some props are missing.

// In older React using createClass, default props are defined using the getDefaultProps() method.

// Example Without Default Props
// render(<Summary />, document.getElementById('react-container'))

// If no props are provided and the component expects them, it may show undefined or cause errors.

//  Example With Default Props
// const Summary = createClass({
//   propTypes: {
//     ingredients: PropTypes.number,
//     steps: PropTypes.number,
//     title: PropTypes.string
//   },

//   getDefaultProps() {
//     return {
//       ingredients: 0,
//       steps: 0,
//       title: "[untitled recipe]"
//     }
//   },

//   render() {
//     const { ingredients, steps, title } = this.props
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>
//           {ingredients} Ingredients | {steps} Steps
//         </p>
//       </div>
//     )
//   }
// })

// Now if we render:

// render(<Summary />, document.getElementById('react-container'))

// Output will be:
// [untitled recipe]
// 0 Ingredients | 0 Steps

//  Why Default Props Are Useful?
// Prevents undefined errors
// Makes components more flexible
// Ensures UI still displays meaningful data
// Reduces debugging issues

//  Simple Idea -
// If a parent does not send a prop → React uses the default value instead.

//==================================
// Custom property validation
//==================================
// Custom property validation in React allows developers to create their own validation rules for props when built-in
//  validators (like PropTypes.string, PropTypes.number, etc.) are not enough. A custom validator is a function that 
// checks a prop’s value and returns an Error if the validation fails or null if the value is valid. 
// This helps enforce specific conditions such as checking if a value is within a range or if a string length is limited.

// Example
// propTypes: {
//   ingredients: PropTypes.number,
//   steps: PropTypes.number,
//   title: (props, propName) =>
//     (typeof props[propName] !== 'string')
//       ? new Error("A title must be a string")
//       : (props[propName].length > 20)
//       ? new Error("title is over 20 characters")
//       : null
// }

// Here the validator checks:
// - The title must be a string
// - The title length must be less than or equal to 20 characters

// If these conditions are not satisfied, React prints a warning in the console.

//========================================================
//  ES6 Classes and Stateless Functional Components 
//========================================================

// In React, property validation (propTypes) and default values (defaultProps) can also be used with ES6 class components and stateless functional components, not just with React.createClass. The syntax is slightly different.

// 1. ES6 Class Components

// For ES6 classes, propTypes and defaultProps are defined outside the class after the class declaration.

// Example:

// class Summary extends React.Component {
//   render() {
//     const { ingredients, steps, title } = this.props
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>{ingredients} Ingredients | {steps} Steps</p>
//       </div>
//     )
//   }
// }

// Summary.propTypes = {
//   ingredients: PropTypes.number,
//   steps: PropTypes.number,
//   title: PropTypes.string
// }

// Summary.defaultProps = {
//   ingredients: 0,
//   steps: 0,
//   title: "[recipe]"
// }
// 2. Stateless Functional Components

// Functional components can also use propTypes and defaultProps.

// Example:

// const Summary = ({ ingredients, steps, title }) => (
//   <div>
//     <h1>{title}</h1>
//     <p>{ingredients} Ingredients | {steps} Steps</p>
//   </div>
// )

// Summary.propTypes = {
//   ingredients: PropTypes.number.isRequired,
//   steps: PropTypes.number.isRequired
// }

// Summary.defaultProps = {
//   ingredients: 1,
//   steps: 1
// }
// 3. Default Values in Function Parameters

// In functional components, default values can also be set directly in the parameters.

// const Summary = ({ ingredients = 0, steps = 0, title = "[recipe]" }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{ingredients} Ingredients | {steps} Steps</p>
//     </div>
//   )
// }
// 4. Static Properties in Classes

// Modern JavaScript allows defining propTypes and defaultProps inside the class using static properties, making the code cleaner and more organized.

// Example:

// class Summary extends React.Component {
//   static propTypes = {
//     ingredients: PropTypes.number,
//     steps: PropTypes.number
//   }

//   static defaultProps = {
//     ingredients: 0,
//     steps: 0
//   }

//   render() {
//     const { ingredients, steps } = this.props
//     return <p>{ingredients} Ingredients | {steps} Steps</p>
//   }
// }

// ✅ Conclusion:
// Using propTypes and defaultProps in React components helps validate properties, provide default values, 
// and make components easier to reuse while preventing bugs through console warnings.


// ==========
// Refs
//=========== 

// Refs (References) in React are used to directly access DOM elements (such as input fields, buttons, etc.) inside a component. They allow a React component to interact with child elements, especially when dealing with user input, form handling, focusing elements, or resetting fields.

// Refs are useful when we need to:

// Read values from input fields

// Reset form fields after submission

// Focus on a specific input element

// Directly access or manipulate DOM elements

// In class components, refs can be created using the ref attribute. React stores these references in this.refs, which allows the component to access the DOM element and its properties (such as value).

// Sometimes a constructor is used to bind event handler functions to the component using this.submit = this.submit.bind(this). This ensures that this inside the method refers to the component instance so that properties like this.refs, this.props, or this.state can be accessed correctly.

// Example
// class AddColorForm extends Component {

//   constructor(props){
//     super(props)
//     this.submit = this.submit.bind(this)
//   }

//   submit(e){
//     e.preventDefault()

//     const title = this.refs._title.value
//     const color = this.refs._color.value

//     alert(`New Color: ${title} ${color}`)

//     this.refs._title.value = ''
//     this.refs._color.value = '#000000'
//     this.refs._title.focus()
//   }

//   render(){
//     return (
//       <form onSubmit={this.submit}>
//         <input ref="_title" type="text" placeholder="color title..." required />
//         <input ref="_color" type="color" required />
//         <button>ADD</button>
//       </form>
//     )
//   }
// }
// Explanation of the Example

// _title.value = '';
// _color.value = '#000000';

// These lines run after the form is submitted.

// So they are used to reset the form fields so the user can enter a new color again.
// // ref="_title" and ref="_color" create references to the input fields.

// These refs are stored in this.refs and can be accessed as:

// this.refs._title

// this.refs._color

// When the user submits the form, the submit() method runs.

// e.preventDefault() prevents the form from refreshing the page.

// The values entered by the user are read using:

// this.refs._title.value

// this.refs._color.value

// After submission, the form fields are reset and the cursor is focused again on the title input.

// Refs provide a way for React components to interact directly with DOM elements, making them useful for handling forms and user input.

//===================
//Inverse Data Flow 
//====================

// Inverse Data Flow is a technique in React where data is sent from a child component to a parent component using a callback function.

// Normally, React follows one-way data flow, where data moves from:

// Parent → Child

// using props.

// However, sometimes a child component collects data, such as from a form. In this situation, the child needs to send the data back to the parent, which is called Inverse Data Flow.

// In inverse data flow, the parent passes a function to the child as a prop, and the child calls that function to send data back to the parent.

// Why Inverse Data Flow Is Used

// In React, the parent component usually manages the application state because multiple components may need the same data. This follows the principle of Single Source of Truth, where one component controls the data.

// For example:

// App (Parent)
//  ├── AddColorForm (collects data)
//  └── ColorList (displays data)

// Here:

// AddColorForm collects the color from the user.

// ColorList displays the colors.

// Since both components depend on the same data, the state is stored in the parent. Therefore, the child must send the collected data back to the parent.

// Example
// Parent Component

// The parent defines a function and passes it to the child.

// const logColor = (title, color) => {
//   console.log(`New Color: ${title} | ${color}`)
// }

// <AddColorForm onNewColor={logColor} />

// Here:

// onNewColor is a prop

// It contains a function from the parent

// Child Component

// The child collects input and calls the parent function.

// submit() {
//   const { _title, _color } = this.refs
//   this.props.onNewColor(_title.value, _color.value)
// }

// When the user submits the form:

// The child collects the input values.

// The child calls the function received through props.

// The data is sent to the parent.

// Flow of Data
// User Input
//      ↓
// Child Component (AddColorForm)
//      ↓
// Calls function from props
//      ↓
// Parent Component receives data
//      ↓
// Parent updates state or performs an action
// Key Points

// React normally uses one-way data flow (Parent → Child).

// When a child needs to send data back, inverse data flow is used.

// The parent passes a callback function as a prop.

// The child calls the function to send data to the parent.

// The parent manages the state and updates the application.



//=========================================
// Refs in Stateless Functional Components
//=========================================

// Refs (references) in React allow a component to directly access DOM elements such as input fields. In class components, refs are accessed using this.refs, but stateless functional components do not have this, so refs are created using callback functions.

// In this method, React passes the DOM element instance to a function, and we store it in a local variable. This allows us to read values, reset inputs, or focus fields when needed.

// Example
// const AddColorForm = ({ onNewColor = f => f }) => {
//   let _title, _color

//   const submit = e => {
//     e.preventDefault()
//     onNewColor(_title.value, _color.value)
//   }

//   return (
//     <form onSubmit={submit}>
//       <input ref={input => _title = input} type="text" />
//       <input ref={input => _color = input} type="color" />
//       <button>ADD</button>
//     </form>
//   )
// }

// Here, the callback ref (input => _title = input) stores the DOM input element in _title, allowing us to access _title.value.

// Here is the difference between refs in ES6 class components and refs in Stateless Functional Components in a clear way.

// Feature  	                Refs in ES6 Class Components	Refs in Stateless Functional Components
// Access method	                Uses this.refs	             Cannot use this, so uses local variables
// Ref syntax (old style)	        <input ref="_title" />	      <input ref={input => _title = input} />
// Where refs are stored	     Stored inside this.refs object	        Stored in local variables
// Use of this	                Uses this because it is a class	        No this because it is a function
// Example access	                this.refs._title.value	                      _title.value
// Ref creation style	        Usually string refs (older React)	        Uses callback function refs
// Component type	                Class-based components	                Function-based components


//========================
// React State Management
//========================

// React State is a built-in feature used to store and manage data that can change inside a component.

// Earlier, React components used props (properties) to pass data. However, props are immutable, meaning they cannot be changed by the component itself after rendering.

// To handle dynamic data that changes due to user interaction, React uses state.

// 🔹 What is State?

// State is a JavaScript object that stores data inside a component and can change over time.

// When the state changes, React automatically re-renders the component to update the UI.

// 👉 In simple words:

// State change → React re-renders component → UI updates
// 🔹 Why State is Important

// Users interact with applications by:

// Navigating pages

// Searching

// Filtering data

// Adding or deleting items

// Clicking buttons

// These interactions change the application data, and React uses state to track these changes and update the UI.

// Example UI changes due to state:

// Menus appear or disappear

// Content updates

// Buttons toggle on/off

// Counters increase or decrease

// 🔹 Key Idea in React

// In React:

// The UI is a reflection of the application state.

// This means:

// Data (State) → Determines → UI

// If the data changes, React updates the UI automatically.

// 🔹 Simple Example
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// Explanation:
// count → state value
// setCount() → function to update state
// When button is clicked → state changes → UI re-renders.

// 🔹 Summary
// Concept	Meaning
// Props	Immutable data passed from parent
// State	Mutable data managed inside component
// State    change	Causes React to re-render UI
// Purpose	Manage dynamic data in applications

// ✅ One-line definition:
// React state is a JavaScript object used to store and manage data that changes in a component and automatically updates the UI when the data changes.


//===========================
// Component State in React
//===========================

// Component State is used to store data that can change within a component. When the state changes, React automatically re-renders the UI to reflect the new data.

// In the StarRating example, the component needs two pieces of data:

// totalStars → number of stars to display (comes from props)

// starsSelected → number of stars chosen by the user (stored in state)

// So:

// Props → fixed data from parent
// State → data that changes inside component
// ⭐ 1. Stateless Star Component

// The Star component represents a single star.

// const Star = ({ selected=false, onClick=f=>f }) =>
//   <div 
//     className={selected ? "star selected" : "star"}
//     onClick={onClick}>
//   </div>
// Explanation

// selected → determines if the star is highlighted

// onClick → function called when the star is clicked

// If selected = true

// class = "star selected"

// If selected = false

// class = "star"
// Example

// If 3 stars are selected:

// ⭐⭐⭐☆☆

// The first three stars get:

// selected = true
// ⭐ 2. Prop Validation
// Star.propTypes = {
//   selected: PropTypes.bool,
//   onClick: PropTypes.func
// }

// This checks that:

// Prop	Type
// selected	Boolean
// onClick	Function
// ⭐ 3. Star Styling (CSS)

// The stars are drawn using CSS.

// .star {
//  background-color: grey;
// }

// .star.selected {
//  background-color: red;
// }

// Result:

// grey star → not selected
// red star → selected
// ⭐ 4. Stateful StarRating Component

// This component manages the rating state.

// Version 1: Using createClass
// const StarRating = createClass({

//   getInitialState() {
//     return {
//       starsSelected: 0
//     }
//   },

//   change(starsSelected) {
//     this.setState({starsSelected})
//   }

// })
// Explanation

// Initial state:

// starsSelected = 0

// When a star is clicked:

// change(3)

// State becomes:

// starsSelected = 3

// React re-renders UI automatically.

// ⭐ 5. Rendering the Stars
// [...Array(totalStars)].map((n,i) =>
//   <Star
//     key={i}
//     selected={i < starsSelected}
//     onClick={() => this.change(i+1)}
//   />
// )
// Step-by-step

// If:

// totalStars = 5

// Array becomes:

// [ , , , , ]

// map() converts it to 5 Star components.

// Selecting stars

// Condition:

// i < starsSelected

// Example:

// starsSelected = 3
// Index	Selected
// 0	true
// 1	true
// 2	true
// 3	false
// 4	false

// UI:

// ⭐⭐⭐☆☆
// ⭐ 6. Click Event
// onClick={() => this.change(i+1)}

// If the 4th star is clicked:

// i = 3

// So:

// change(4)

// State becomes:

// starsSelected = 4

// UI updates:

// ⭐⭐⭐⭐☆
// ⭐ 7. Showing Rating Text
// <p>{starsSelected} of {totalStars} stars</p>

// Example output:

// 4 of 5 stars
// ⭐ 8. ES6 Class Version

// Instead of createClass, modern React uses ES6 classes.

// class StarRating extends Component {

//  constructor(props){
//    super(props)

//    this.state = {
//      starsSelected: 0
//    }
//  }

//  change(starsSelected){
//    this.setState({starsSelected})
//  }

// }
// Why super(props)?

// It calls the parent class:

// React.Component

// This enables React features like state and lifecycle methods.

// 🔄 Working Flow
// Component loads
//       ↓
// starsSelected = 0
//       ↓
// User clicks a star
//       ↓
// change() runs
//       ↓
// setState() updates state
//       ↓
// React re-renders component
//       ↓
// Stars update in UI
// 📊 Summary
// Concept	Purpose
// Props	Pass fixed data from parent
// State	Store changing data
// setState()	Updates component state
// render()	Displays UI based on state
// Stateless components	Simple UI elements
// Stateful components	Manage changing data

// ✅ One-line idea
// In React, state stores changing data inside a component, and whenever state changes, React automatically updates the UI.

//====================================
// Initializing State from Properties
//====================================

// Sometimes a React component needs to initialize its state using values passed through props. This pattern is used mainly when building reusable components that might receive different initial values from different parent components.

// Normally:

// Props → data passed from parent (immutable)

// State → data managed inside the component (mutable)

// In some cases, we use props to set the initial state, so the component can later update that value internally.

// 🔹 Using componentWillMount() (Older Method)

// When using React.createClass, state can be initialized from props inside the componentWillMount() lifecycle method.

// This method runs once before the component is rendered.

// Example
// const StarRating = createClass({
//   getInitialState() {
//     return {
//       starsSelected: 0
//     }
//   },

//   componentWillMount() {
//     const { starsSelected } = this.props
//     if (starsSelected) {
//       this.setState({ starsSelected })
//     }
//   }
// })
// How it works

// Initial state starts as:

// starsSelected = 0

// If the parent sends a prop:

// <StarRating starsSelected={3} />

// componentWillMount() updates the state:

// state.starsSelected = 3

// So the component starts with 3 stars selected.

// 🔹 Using Constructor (Modern ES6 Class Method)

// In ES6 class components, the constructor is the preferred way.

// Example
// class StarRating extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       starsSelected: props.starsSelected || 0
//     }
//   }
// }

// Explanation:

// props.starsSelected → value passed from parent

// || 0 → if no value is provided, default is 0

// 🔹 Example Usage
// <StarRating totalStars={7} starsSelected={3} />

// Result:

// Total stars: 7
// Initially selected: 3
// 🔹 Important Note

// React developers usually avoid copying props into state, because it can cause synchronization problems.

// This pattern should be used only when necessary, such as:

// Creating reusable UI components

// Setting initial default values from props

// ✅ One-line summary

// Initializing state from properties means using values passed through props to set the initial state of a React component so that the component can later update that value internally.


// ======================================
// State Within the Component Tree
//=======================================

// In React, every component can have its own state, but it is not recommended to store state in many components because it makes the application harder to understand and manage.

// A better approach is to store most or all state in the root component and pass that data down to child components using props.

// Key Idea

// React applications should have a single source of truth, meaning:

// The main data (state) is stored in one central component.

// Other components receive that data via props.

// Example structure:

// App (state stored here)
//    ↓
// ColorList (props)
//    ↓
// Color (props)
//    ↓
// StarRating (props)

// If the state changes in the root component, React automatically updates the UI.

// ==============================
// Color Organizer App Overview
//==============================

// The Color Organizer App lets users:

// Add colors

// Name colors

// Rate colors

// Remove colors

// All the application data is stored in one state object.

// Example state:

// {
//   colors: [
//     {
//       id: "1",
//       title: "ocean at dusk",
//       color: "#00c4e2",
//       rating: 5
//     },
//     {
//       id: "2",
//       title: "lawn",
//       color: "#26ac56",
//       rating: 3
//     }
//   ]
// }

// Each color object contains:

// Property	Meaning
// id	unique identifier
// title	name of color
// color	hex color code
// rating	star rating

// This state data controls the UI.

// When users:

// add a color → object added to array

// remove color → object removed

// rate color → rating value changes

// React updates the UI automatically.

// ===========================================
// Passing Properties Down the Component Tree
//============================================

// State is stored in the root component, and data is passed down to child components using props.

// Example:

// class App extends Component {
//  constructor(props) {
//   super(props)

//   this.state = {
//    colors: []
//   }
//  }

//  render() {
//   const { colors } = this.state

//   return (
//    <div className="app">
//     <AddColorForm />
//     <ColorList colors={colors} />
//    </div>
//   )
//  }
// }

// Flow of data:

// App (state: colors array)
//         ↓ props
// ColorList
//         ↓ props
// Color
//         ↓ props
// StarRating

// This pattern is called top-down data flow.

//=============================
//  Presentational Components
//==============================

// Presentational components are components that only display UI.

// They:

// do not manage state

// receive data via props

// send actions back using callback functions

// Example:

// const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
//  <div>
//   {[...Array(totalStars)].map((n, i) =>
//    <Star
//      key={i}
//      selected={i < starsSelected}
//      onClick={() => onRate(i+1)}
//    />
//   )}
//  </div>

// Here:

// starsSelected → number of selected stars

// totalStars → total stars

// onRate → function called when rating changes

// Instead of using state, it sends the rating back using a callback.

// State in Reusable Components
// Sometimes reusable components may need their own state.

// Example cases:

// UI libraries

// reusable widgets

// independent components

// Although the best practice is to avoid state in presentation components, it is acceptable when necessary.

// Key idea:

// Prefer stateless components
// but allow state when required

//  Root Component State (App Component)
// In the Color Organizer, the App component stores the entire state.

// Example:

// class App extends Component {
//  constructor(props) {
//   super(props)

//   this.state = {
//    colors: []
//   }
//  }
// }

// This means:

// All application data is stored here

// Then it passes the data down:

// <ColorList colors={colors} />

//  ColorList Component
// ColorList receives the colors array as props and displays each color.

// Example:

// const ColorList = ({ colors=[] }) =>
//  <div>
//   {(colors.length === 0)
//    ? <p>No Colors Listed</p>
//    : colors.map(color =>
//        <Color key={color.id} {...color} />
//      )
//   }
//  </div>

// Features:

// Shows message if no colors

// Uses map() to display colors

// Passes color data to Color component

// Color Component
// The Color component displays one color.

// Example:

// const Color = ({ title, color, rating=0 }) =>
//  <section>
//   <h1>{title}</h1>

//   <div style={{backgroundColor: color}}></div>

//   <StarRating starsSelected={rating} />
//  </section>

// It shows:

// color title

// color preview

// star rating

// The rating is passed to StarRating as a prop.

//  Data Flow in the Color Organizer
// Complete flow of data:

// App (state: colors array)
//       ↓
// ColorList (receives colors)
//       ↓
// Color (receives title, color, rating)
//       ↓
// StarRating (receives starsSelected)

// If the state changes in App, React automatically re-renders the UI.

//  Key Concepts Summary
// Concept	Meaning
// State	Data that can change
// Props	Data passed from parent
// Root Component	Main component storing state
// Presentational Component	UI-only component
// Single Source of Truth	All state stored in one place
// Top-down Data Flow	Data moves from parent to child

// ✅ One-line summary

// React applications are easier to manage when state is stored in a single root component and passed down the component tree as props, while child components remain stateless and focused on presentation.

// Passing Data Back Up the Component Tree

// In React, state is usually stored in the root component. Child components cannot directly change that state.

// So when a user interacts with the UI, the child component must send information back to the parent component so the parent can update the state.

// This is done using callback functions passed as props.

// Data Flow in React
// Parent → passes data down (props)

// Child → sends events up (callback functions)

// Example flow:

// App (state)
//  ↓
// ColorList
//  ↓
// Color
//  ↓
// StarRating

// User clicks star
//  ↑
// StarRating calls onRate()
//  ↑
// ColorList passes id + rating
//  ↑
// App updates state
// 2️⃣ Creating Unique IDs with UUID

// When adding new colors, each color must have a unique ID.

// React uses this ID to:

// identify items

// update or remove specific items

// improve rendering performance

// The uuid library generates unique IDs.

// Install it:

// npm install uuid --save

// Import it:

// import { v4 } from "uuid"

// Example:

// id: v4()

// Example generated ID:

// 0175d1f0-a8c6-41bf-8d02-df5734d829a4
// 3️⃣ Adding Colors (AddColorForm → App)

// The AddColorForm component collects user input and sends it to the parent component using a callback function.

// App Component
// import { Component } from "react"
// import { v4 } from "uuid"
// import AddColorForm from "./AddColorForm"
// import ColorList from "./ColorList"

// export class App extends Component {

//  constructor(props){
//   super(props)

//   this.state = {
//    colors: []
//   }

//   this.addColor = this.addColor.bind(this)
//  }

//  addColor(title, color){

//   const colors = [
//    ...this.state.colors,
//    {
//     id: v4(),
//     title,
//     color,
//     rating: 0
//    }
//   ]

//   this.setState({colors})
//  }

//  render(){

//   const { colors } = this.state
//   const { addColor } = this

//   return(
//    <div className="app">
//     <AddColorForm onNewColor={addColor}/>
//     <ColorList colors={colors}/>
//    </div>
//   )
//  }
// }
// What happens here

// 1️⃣ User submits form
// 2️⃣ AddColorForm calls onNewColor(title,color)
// 3️⃣ addColor() runs in App
// 4️⃣ New color added to state
// 5️⃣ UI re-renders

// 4️⃣ Updating State with setState

// Whenever state changes, React re-renders the UI automatically.

// Example:

// this.setState({colors})

// After this:

// App rerenders
//  ↓
// ColorList receives updated colors
//  ↓
// UI updates
// 5️⃣ Removing and Rating Colors

// Each color can:

// be rated

// be removed

// So callback functions are added:

// Callback	Purpose
// onRate	change rating
// onRemove	remove color
// 6️⃣ Color Component

// Each color displays:

// title

// color preview

// rating stars

// remove button

// Example:

// const Color = ({title,color,rating=0,onRemove=f=>f,onRate=f=>f}) =>
//  <section className="color">

//   <h1>{title}</h1>

//   <button onClick={onRemove}>X</button>

//   <div
//    className="color"
//    style={{backgroundColor:color}}
//   >
//   </div>

//   <StarRating
//    starsSelected={rating}
//    onRate={onRate}
//   />

//  </section>
// What happens here

// User actions:

// Click X → onRemove()
// Click star → onRate()

// These functions notify the parent.

// 7️⃣ ColorList Component

// ColorList manages all color components.

// Example:

// const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
//  <div className="color-list">

//  {(colors.length === 0)
//    ? <p>No Colors Listed</p>

//    : colors.map(color =>

//       <Color
//         key={color.id}
//         {...color}

//         onRate={(rating) =>
//          onRate(color.id, rating)
//         }

//         onRemove={() =>
//          onRemove(color.id)
//         }
//       />
//    )
//  }

//  </div>
// Important Concept

// ColorList captures the color ID and passes it upward.

// Example:

// onRate(color.id, rating)

// Now the parent knows which color was rated.

// 8️⃣ Updating Rating in App

// The App component updates rating using map().

// Example:

// rateColor(id, rating){

//  const colors = this.state.colors.map(color =>

//   (color.id !== id)
//    ? color
//    : {
//       ...color,
//       rating
//      }

//  )

//  this.setState({colors})
// }
// What happens here

// 1️⃣ Find the color with matching ID
// 2️⃣ Update its rating
// 3️⃣ Return updated array
// 4️⃣ Update state

// Example before:

// Red rating = 2

// User clicks star 4

// After:

// Red rating = 4
// 9️⃣ Removing Colors

// Removing uses Array.filter().

// Example:

// removeColor(id){

//  const colors = this.state.colors.filter(
//   color => color.id !== id
//  )

//  this.setState({colors})
// }
// Example

// Before:

// Red
// Blue
// Green

// User removes Blue.

// After:

// Red
// Green
// 🔟 Passing Callbacks from App

// The App component sends callbacks to ColorList.

// Example:

// <ColorList
//  colors={colors}
//  onRate={rateColor}
//  onRemove={removeColor}
// />

// So:

// ColorList → Color → StarRating

// All events travel back to App.

// 1️⃣1️⃣ Single Source of Truth

// All state is stored in one component.

// App

// Example state:

// {
//  colors:[
//   {id:1,title:"Red",color:"#ff0000",rating:3},
//   {id:2,title:"Blue",color:"#0000ff",rating:4}
//  ]
// }

// Benefits:

// easier debugging

// predictable data flow

// centralized data management

// 1️⃣2️⃣ Using State for Caching Data

// State can also store temporary data.

// Example:

// Search results.

// this.state = {
//  results: []
// }

// Instead of fetching data repeatedly, React stores it in state.

// 1️⃣3️⃣ Problem in Large Applications

// In large apps:

// passing props through many levels becomes difficult

// callbacks become complex

// Example problem:

// App
//  ↓
// ComponentA
//  ↓
// ComponentB
//  ↓
// ComponentC
//  ↓
// ComponentD

// Passing props through many components is called prop drilling.

// 1️⃣4️⃣ Solution: Flux / Redux

// For large apps, developers use state management libraries like:

// Redux

// Flux

// These allow:

// global state management

// less prop drilling

// cleaner architecture

// 1️⃣5️⃣ Final Key Concepts
// Concept	Meaning
// Props	Data passed from parent
// State	Data that changes
// Callback functions	Send data back to parent
// setState()	Updates component state
// map()	Update specific items
// filter()	Remove items
// UUID	Create unique IDs
// Single source of truth	State stored in root component

// ✅ Final summary

// React applications follow a top-down data flow where state is stored in the root component, passed to child components through props, and user actions send data back to the parent using callback functions, allowing the parent to update state and re-render the UI.