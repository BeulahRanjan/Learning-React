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
