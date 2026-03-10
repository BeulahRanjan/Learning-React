/*===================================================================================
React Component Lifecycle Notes
===================================================================================*/

/*
=======================
Component Lifecycle
=======================

In React (JavaScript library), the component lifecycle refers to the sequence of
methods that run when a component is created, updated, or removed.

Two main lifecycles:

1. Mounting  → when the component appears for the first time
2. Updating  → when props or state change

The render() method is also part of the lifecycle.

----------------------------------------------------------------

1. What is Mounting?

Mounting means a component is created and inserted into the DOM
(Document Object Model) for the first time.

Simple meaning:
Mounting = when the component first appears on the screen.

Example:

function Welcome(){
  return <h1>Hello World</h1>
}

ReactDOM.render(<Welcome />, document.getElementById("root"))

React will:
1. Create the component instance
2. Render JSX
3. Insert it into the DOM

----------------------------------------------------------------

2. Mounting Lifecycle (Class Components)

Important mounting methods:

constructor()
componentWillMount()  (deprecated)
render()
componentDidMount()
componentWillUnmount()

Execution order:

constructor()
↓
componentWillMount()
↓
render()
↓
componentDidMount()

----------------------------------------------------------------

3. Purpose of Mounting Methods

These lifecycle methods allow you to:

• Initialize state
• Make API calls
• Start timers or intervals
• Manipulate the DOM
• Initialize external libraries

----------------------------------------------------------------

4. Constructor and State

constructor(props){
  super(props)

  this.state = {
    members: [],
    loading: false,
    error: null
  }
}

Purpose:

• super() calls the parent Component constructor
• this.state initializes the component state

----------------------------------------------------------------

5. this Keyword

this refers to the current component instance.

Examples:

this.props
this.state
this.setState()

----------------------------------------------------------------

6. super()

super() calls the constructor of the parent class Component.

It initializes important React features such as:

• this.props
• lifecycle methods
• setState()

Rule:
super() must be called before using this.

----------------------------------------------------------------

7. Props

Props = data passed from parent component to child component.

Example:

<MemberList count={5} />

Child receives:

this.props.count = 5

Properties of props:

• Read-only
• Passed from parent → child

----------------------------------------------------------------

8. State

State = data managed inside a component.

Example:

this.state = {
  members: [],
  loading: false
}

State is updated using:

this.setState()

When state changes → React re-renders the component.

----------------------------------------------------------------

9. Props vs State

Feature        Props                State
------------------------------------------------
Source         Parent               Component
Editable       No                   Yes
Updated by     Parent               setState()

----------------------------------------------------------------

10. Component Instances

A component class acts like a blueprint.

Example:

<Member />
<Member />
<Member />

React creates separate instances:

Member instance 1
Member instance 2
Member instance 3

Each instance has its own props and state.

----------------------------------------------------------------

11. Spread Operator in Props

Example:

<Member {...user} />

Equivalent to:

<Member
 email={user.email}
 picture={user.picture}
 name={user.name}
 location={user.location}
/>

----------------------------------------------------------------

12. Rendering Flow Example

Execution flow:

1. constructor()
2. componentWillMount()
3. API call starts
4. loading = true
5. render() → "Loading Members"
6. data received
7. setState()
8. React re-renders
9. members.map() → creates Member components

----------------------------------------------------------------

13. componentDidMount()

componentDidMount() runs AFTER the component has rendered and
been inserted into the DOM.

Common uses:

• Make API requests
• Initialize third-party libraries
• Start timers or intervals
• Attach event listeners

Reason:
These operations require the DOM to exist.

Example:

componentDidMount(){
  fetch("api/users")
}

----------------------------------------------------------------

14. componentWillUnmount()

componentWillUnmount() runs just BEFORE the component is removed
from the DOM.

Used to clean up:

• Timers
• Event listeners
• Subscriptions

Example:

componentWillUnmount(){
  clearInterval(this.timer)
}

----------------------------------------------------------------

15. Why DOM is required for some libraries

Libraries such as:

• Drag-and-drop libraries
• Touch event libraries
• Animation libraries

need access to real HTML elements to attach event listeners.

Example:

element.addEventListener("touchstart", handler)

Since the DOM exists only after rendering,
componentDidMount() is the correct place to initialize them.

----------------------------------------------------------------

16. Modern React

Modern React mainly uses functional components with Hooks.

Example:

const [members, setMembers] = useState([])

Instead of lifecycle methods:

componentDidMount() → useEffect(() => {}, [])

No need for:

• constructor
• this
• super

----------------------------------------------------------------

Final Mental Model

Component class → blueprint
Component instance → object created from blueprint

super() → initializes parent class
this → current component instance
props → data from parent
state → internal component data
setState() → updates state and triggers re-render

*/