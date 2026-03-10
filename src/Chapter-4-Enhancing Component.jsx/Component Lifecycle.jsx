/*===================================================================================
 Chapter-4
 Ehancing Components – Explains improving React components by using lifecycle methods, 
 higher-order components, external libraries, and state management techniques.
 ====================================================================================*/

 

/*
1. Component Lifecycle

In React, the component lifecycle refers to the sequence of methods that run when a component is created, updated, or removed.

Two main lifecycles:

Mounting – when the component appears for the first time

Updating – when props or state change

The render() method is also part of the lifecycle.

2. What is Mounting?

Mounting means a component is created and inserted into the DOM for the first time.

Simple meaning:

Mounting = when the component first appears on the screen.

Example:

function Welcome(){
  return <h1>Hello World</h1>
}

When rendered:

ReactDOM.render(<Welcome />, document.getElementById("root"))

React will:

Create the component instance

Render JSX

Insert it into the DOM

3. Mounting Lifecycle (Class Components)

Important mounting methods:

constructor()

componentWillMount() (deprecated)

render()

componentDidMount()

componentWillUnmount()

Order:

constructor()
↓
componentWillMount()
↓
render()
↓
componentDidMount()
4. Purpose of Mounting Methods

These methods allow you to:

initialize state

make API calls

start timers

manipulate the DOM

initialize external libraries

5. Constructor and State
constructor(props){
  super(props)

  this.state = {
    members: [],
    loading: false,
    error: null
  }
}

Purpose:

super() calls the parent Component constructor

this.state initializes the component state

6. this Keyword

this refers to the current component instance.

Example:

this.props
this.state
this.setState()
7. super()

super() calls the constructor of the parent class Component.

It initializes React features like:

this.props

lifecycle support

setState()

Rule:

super() must be called before using this
8. Props

Props = data passed from parent to child component

Example:

<MemberList count={5} />

Child receives:

this.props.count = 5

Props are:

read-only

passed parent → child

9. State

State = data managed inside a component

Example:

this.state = {
  members: [],
  loading: false
}

State is updated using:

this.setState()

When state changes → React re-renders the component.

10. Props vs State
Feature	Props	State
Source	Parent	Component itself
Editable	No	Yes
Updated by	Parent	setState()
11. Component Instances

A component class is a blueprint.

Example:

<Member />
<Member />
<Member />

React creates 3 component instances.

Each instance has its own props and state.

12. Rendering Flow Example

Execution flow:

1. constructor()
2. componentWillMount()
3. API call
4. loading = true
5. render() → "Loading Members"
6. data received
7. setState()
8. React re-renders
9. members.map() → creates Member components
13. Spread Operator in Props

Example:

<Member {...user} />

Equivalent to:

<Member
 email={user.email}
 picture={user.picture}
 name={user.name}
 location={user.location}
/>
14. Modern React

Modern React mostly uses functional components + hooks.

Example:

const [members, setMembers] = useState([])

No need for:

constructor

this

super

Final Mental Model
Component class → blueprint
Component instance → object created from blueprint

super() → initializes parent class
this → current component instance
props → data from parent
state → internal component data
setState() → updates state and triggers re-render
 */