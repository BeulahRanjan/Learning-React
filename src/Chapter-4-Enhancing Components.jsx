/*===================================================================================
 Chapter-3 
 Ehancing Components – Explains improving React components by using lifecycle methods, 
 higher-order components, external libraries, and state management techniques.
 ====================================================================================*/

 /*
======================
Component Lifecycles
======================
The component lifecycle consists of methods that are invoked in series when a com‐
ponent is mounted or updated. These methods are invoked either before or after the
component renders the UI. In fact, the render method itself is a part of the compo‐
nent lifecycle. There are two primary lifecycles: the mounting lifecycle and the updat‐
ing lifecycle.

 What is Mounting?
 ->In React, mounting refers to the moment when a component is created and inserted into the DOM (Document Object Model) for the first time.

Simple Meaning

Mounting = When a React component appears on the screen for the first time.

It is the initial phase of a component’s lifecycle.

function Welcome() {
  return <h1>Hello World</h1>;
}

When this component is rendered like this:
ReactDOM.render(<Welcome />, document.getElementById("root"));

The Welcome component is mounted, meaning:
- React creates the component instance
- React renders the JSX
- React adds it to the DOM
The user sees it on the webpage

In modern React with Hooks, mounting behavior is handled using useEffect.
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello</h1>;
}

The empty dependency array [] means run only once when the component mounts.

==============================
Mounting Lifecycle
==============================

The mounting lifecycle consists of methods that are invoked when a component is
mounted or unmounted.

What does mounting allows us to do?
->these methods allow you to initially set up
state, make API calls, start and stop timers, manipulate the rendered DOM, initialize
third-party libraries, and more.
These methods allow you to incorporate JavaScript to
assist in the initialization and destruction of a component.

The mounting lifecycle is slightly different depending upon whether you use ES6
class syntax or React.createClass to create components. When you use
createClass, getDefaultProps is invoked first to obtain the component’s proper‐
ties. Next, getInitialState is invoked to initialize the state.

ES6 classes do not have these methods. Instead, default props are obtained and sent
to the constructor as an argument. The constructor is where the state is initialized.
Both ES6 class constructors and getInitialState have access to the properties and,
if required, can use them to help define the initial state.

Table 7-1. The component mounting lifecycle
_______________________________________________
|    ES6 class          |React.createClass()   |
|_______________________|______________________|
|                       | getDefaultProps()    |
|constructor(props)     | getInitialState()    |
|componentWillMount()   |componentWillMount()  |
|render()               |render()              |
|componentDidMount()    |componentDidMount()   |
|componentWillUnmount() |componentWillUnmount()|
|_______________________|______________________|

Once the properties are obtained and state is initialized, the componentWillMount
method is invoked. This method is invoked before the DOM is rendered. It is possible
to invoke setState from this method to change the component state just before the
component is initially rendered.


import React, { Component } from "react";


const getFakeMembers = (count) => {
  return fetch(`https://randomuser.me/api/?results=${count}`)
    .then(response => response.json())
    .then(json => json.results);
};

const Member = ({ email, picture, name, location }) => (
  <div className="member">
    <img src={picture.thumbnail} alt="" />
    <h1>{name.first} {name.last}</h1>
    <p><a href={"mailto:" + email}>{email}</a></p>
    <p>{location.city}, {location.state}</p>
  </div>
);


class MemberList extends Component {
  constructor() {
    super();

    this.state = {
      members: [],
      loading: false,
      error: null
    };
  }

  componentWillMount() {
    this.setState({ loading: true });

    getFakeMembers(this.props.count).then(
      members => {
        this.setState({ members, loading: false });
      },
      error => {
        this.setState({ error, loading: false });
      }
    );
  }

  componentWillUpdate() {
    console.log("updating lifecycle");
  }

  render() {
    const { members, loading, error } = this.state;

    return (
      <div className="member-list">
        {loading ?
          <span>Loading Members</span> :
          members.length ?
            members.map((user, i) =>
              <Member key={i} {...user} />
            )
            :
            <span>0 members loaded...</span>
        }

        {error ? <p>Error Loading Members</p> : ""}
      </div>
    );
  }
}

export default function App() {
  return <MemberList count={5} />;
}

Explanation of the code:
This code contains two React components:

Member → A small UI component that displays one member.

MemberList → A parent component that fetches and displays multiple members.

Both are written using React.

I’ll explain the code line by line and then answer your question about which component render() renders.

1. Member Component (Child Component)
const Member = ({ email, picture, name, location }) =>

This is a functional component.

It receives props using destructuring.

Props expected:
- email
- picture
- name
- location

Example props object:

{
  email: "john@email.com",
  picture: { thumbnail: "img.jpg" },
  name: { first: "John", last: "Doe" },
  location: { city: "New York", state: "NY" }
}
<div className="member">

Creates a container <div> for one member.

<img src={picture.thumbnail} alt="" />

Displays the member profile image.

Example:

picture.thumbnail = "https://randomuser.me/api/portraits/thumb/men/10.jpg"
<h1>{name.first} {name.last}</h1>

Displays the member's full name.

Example output:

John Doe
<p><a href={"mailto:" + email}>{email}</a></p>

Creates a clickable email link.

Example output:

john@email.com

Clicking it opens the email client.

<p>{location.city}, {location.state}</p>

Displays the member location.

Example:

New York, NY
2. MemberList Component (Parent Component)
class MemberList extends Component {

This is a class component that manages state and lifecycle.

Constructor
constructor() {
 super()

constructor() runs when the component is created.

super() calls the parent Component constructor.

this.state = {
 members: [],
 loading: false,
 error: null
}

Initial state variables:

State	Purpose
members	list of users
loading	indicates data loading
error	stores error if API fails

Initial values:

members = []
loading = false
error = null
3. componentWillMount()
componentWillMount() {

This lifecycle method runs before the component mounts.

⚠️ In modern React this method is deprecated.

this.setState({loading: true})

Before fetching data:

loading = true

This tells React to show a loading message.

getFakeMembers(this.props.count)

Calls a function to fetch fake users.

Example:

getFakeMembers(5)

Returns 5 random users.

Usually from randomuser API.

.then(
 members => {

This runs if the API request succeeds.

this.setState({members, loading: false})

Updates state:

members = fetched users
loading = false

Now React will re-render the UI.

error => {
 this.setState({error, loading: false})
}

If the API fails, it stores the error.

4. componentWillUpdate()
componentWillUpdate() {
 console.log('updating lifecycle')
}

This lifecycle method runs before re-rendering when state changes.

Example:

console → updating lifecycle
5. render()
render() {

The render method decides what appears on the screen.

const { members, loading, error } = this.state

Destructuring state.

Same as writing:

this.state.members
this.state.loading
this.state.error
<div className="member-list">

Container for all members.

6. Conditional Rendering
(loading) ?
 <span>Loading Members</span> :

If loading is true:

Output:

Loading Members
(members.length) ?

If members exist:

members.map((user, i) =>
 <Member key={i} {...user} />
)

Here React loops through members.

For each user:

<Member {...user} />

This means:

<Member
 email={user.email}
 picture={user.picture}
 name={user.name}
 location={user.location}
/>

So each user becomes a Member component.

<span>0 members loaded...</span>

If there are no members, this message appears.

7. Error Handling
{(error) ? <p>Error Loading Members: error</p> : ""}

If an error exists:

Error Loading Members
8. Which Component Does render() Render?

Important question 👇

The render() function belongs to MemberList

So React first renders:

MemberList

Inside MemberList, the code dynamically renders:

<Member />
<Member />
<Member />

for each user.

Rendering Hierarchy
MemberList (Parent)
   |
   |-- Member (User 1)
   |-- Member (User 2)
   |-- Member (User 3)
Final Example Output
Member List
--------------------------------
[Image] John Doe
john@email.com
New York, NY

[Image] Jane Smith
jane@email.com
Texas, TX

Each user is a Member component.

Full Flow of Execution

1️- MemberList constructor runs
2️- componentWillMount() runs
3️- API fetch starts
4️- loading = true
5️- render → "Loading Members"
6️- API returns members
7️- setState() updates members
8️- React re-renders
9️- members.map() creates multiple Member components


 */