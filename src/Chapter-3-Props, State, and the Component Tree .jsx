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