/*
=====================
Updating Lifecycle
=====================

/*

REACT COMPONENT LIFECYCLE


In React, the component lifecycle refers to the sequence of methods
that run when a component is:

1. Mounted (created and inserted into the DOM)
2. Updated (when props or state change)
3. Unmounted (removed from the DOM)

Lifecycle Phases:

Mounting → Updating → Unmounting


=================================================
MOUNTING PHASE (Component Creation)
=================================================

This phase runs when the component is first created and inserted into the DOM.

Execution Order:

constructor()
↓
componentWillMount()
↓
render()
↓
componentDidMount()


-------------------------------------------------
1. constructor(props)
-------------------------------------------------

The constructor initializes the component.

Example:

constructor(props){
  super(props)

  this.state = {
    hidden: false
  }
}

Purpose:

• Initialize state
• Bind class methods


-------------------------------------------------
2. componentWillMount()
-------------------------------------------------

Runs just before the component renders for the first time.

Purpose:

• Prepare the component before rendering

⚠ Deprecated in modern React.


-------------------------------------------------
3. render()
-------------------------------------------------

The render method returns the UI of the component.

Example:

render(){
  return(
    <h1>Hello React</h1>
  )
}

Important rules:

• Must return JSX
• Must be a pure function
• Should not perform side effects
• Should not call setState()


-------------------------------------------------
4. componentDidMount()
-------------------------------------------------

Runs after the component is inserted into the DOM.

Purpose:

• API calls
• DOM manipulation
• Start timers
• Add event listeners

Example:

componentDidMount(){
  console.log("Component mounted")
}




UPDATING LIFECYCLE


The updating lifecycle runs when:

1. Component receives new props
2. Component state changes

Execution Order:

componentWillReceiveProps(nextProps)
↓
shouldComponentUpdate(nextProps, nextState)
↓
componentWillUpdate(nextProps, nextState)
↓
render()
↓
componentDidUpdate(prevProps, prevState)



-------------------------------------------------
1. componentWillReceiveProps(nextProps)
-------------------------------------------------

Runs when the component receives new props from the parent.

Example:

componentWillReceiveProps(nextProps){
  this.setState({ hidden: nextProps.hide })
}

Purpose:

• Update state when props change

Example Flow:

Parent sends hide = true
↓
Child receives props
↓
componentWillReceiveProps runs
↓
hidden state updates

Note:

This method runs ONLY when props change, not when state changes.

⚠ Deprecated in modern React.



-------------------------------------------------
2. shouldComponentUpdate(nextProps, nextState)
-------------------------------------------------

This method decides whether the component should re-render.

It acts as the performance gatekeeper.

Example:

shouldComponentUpdate(nextProps, nextState){
  return true
}

Return values:

true  → component updates
false → component does not update

Purpose:

Improve performance by preventing unnecessary re-renders.

Example:

shouldComponentUpdate(nextProps){
  return this.props.rating !== nextProps.rating
}



-------------------------------------------------
3. componentWillUpdate(nextProps, nextState)
-------------------------------------------------

Runs just before the component updates.

Runs only if shouldComponentUpdate returns true.

Example:

componentWillUpdate(nextProps,nextState){
  console.log("Component will update")
}

Purpose:

• Prepare for update

⚠ Deprecated in modern React.



-------------------------------------------------
4. componentDidUpdate(prevProps, prevState)
-------------------------------------------------

Runs after the component updates and render completes.

Receives previous props and state.

Example:

componentDidUpdate(prevProps, prevState){
  console.log("Component updated")
}

Example comparison:

if(this.props.rating > prevProps.rating){
  console.log("Rating increased")
}

Purpose:

• React to updates
• Compare old and new values



=================================================
UNMOUNTING PHASE
=================================================

Runs when the component is removed from the DOM.

Method:

componentWillUnmount()

Example:

componentWillUnmount(){
  clearInterval(this.interval)
}

Purpose:

• Cleanup tasks
• Remove event listeners
• Stop timers
• Cancel API requests



=================================================
HIDDEN MESSAGE COMPONENT
=================================================

Parent Component Example:

<HiddenMessage hide={this.state.hidden}>
  Secret Message
</HiddenMessage>


Child Component:

class HiddenMessage extends Component {

  constructor(props){
    super(props)

    this.state = {
      hidden: props.hide
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      hidden: nextProps.hide
    })
  }

  render(){
    return (
      <p>
        {this.state.hidden ? null : this.props.children}
      </p>
    )
  }
}


-------------------------------------------------
Meaning of children
-------------------------------------------------

this.props.children refers to the content inside the component tag.

Example:

<HiddenMessage>
  Secret Message
</HiddenMessage>

Here:

this.props.children = "Secret Message"



-------------------------------------------------
Hidden Message Logic
-------------------------------------------------

hidden ? null : children

Meaning:

If hidden = true
→ show nothing

If hidden = false
→ show children content



=================================================
MODERN REACT VERSION (FUNCTIONAL COMPONENT)
=================================================

Modern React uses Hooks instead of lifecycle methods.

Example:

function HiddenMessage({ hide, children }) {

  const [hidden, setHidden] = useState(hide)

  useEffect(() => {
    setHidden(hide)
  }, [hide])

  return (
    <p>{hidden ? null : children}</p>
  )
}



=================================================
setInterval WITH useEffect
=================================================

Example:

useEffect(() => {

  const interval = setInterval(() => {
    setShowing(prev =>
      prev + 1 >= messages.length ? -1 : prev + 1
    )
  }, 1000)

  return () => clearInterval(interval)

}, [messages.length])



-------------------------------------------------
setInterval
-------------------------------------------------

setInterval() runs a function repeatedly after a fixed time.

Example:

1000 ms = 1 second



-------------------------------------------------
Interval ID
-------------------------------------------------

const interval = setInterval(...)

setInterval returns an interval ID used to stop it.



-------------------------------------------------
clearInterval
-------------------------------------------------

clearInterval(interval)

Stops the running timer.



-------------------------------------------------
useEffect Cleanup Function
-------------------------------------------------

return () => clearInterval(interval)

Cleanup runs when:

1. Dependency changes
2. Component unmounts



-------------------------------------------------
Important Point
-------------------------------------------------

Cleanup does NOT run every second.

The interval continues running unless:

• dependency changes
• component unmounts



=================================================
FUNCTIONAL STATE UPDATE
=================================================

Inside timers we use:

setShowing(prev => ...)

Reason:

prev always provides the latest state value.

This prevents stale state problems.



=================================================
Example State Cycle
=================================================

If:

messages.length = 3

Then state updates:

showing = -1 → 0 → 1 → 2 → -1 → ...

Messages cycle repeatedly.



=================================================
WHY showing IS NOT IN DEPENDENCY ARRAY
=================================================

If we write:

[showing]

Then:

interval runs
↓
setShowing
↓
showing changes
↓
useEffect runs again
↓
clearInterval
↓
new interval created

The timer would restart every second.

Therefore we avoid including showing.



=================================================
CORRECT PATTERN
=================================================

useEffect runs
↓
interval starts once
↓
interval updates state every second
↓
component re-renders
↓
interval continues running



=================================================
IMPORTANT REACT RULES
=================================================

React re-renders a component when:

1. state changes
2. props change


setInterval runs in the JavaScript event loop.
React only handles the state updates triggered by it.


Always use functional state updates when state depends
on previous state:

setState(prev => newState)



=================================================
COMPLETE LIFECYCLE SUMMARY
=================================================

Mounting

constructor
componentWillMount
render
componentDidMount


Updating

componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate


Unmounting

componentWillUnmount



=================================================
MEMORY TRICK
=================================================

Mount → Update → Unmount

Create → Change → Destroy
*/
