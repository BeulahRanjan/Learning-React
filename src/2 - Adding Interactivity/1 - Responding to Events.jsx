/*
React lets you add event Handlers to your JSX. Event handlers are your 
own functions that will be triggered in response to interactions like 
clicking,hovering, focusing froem inputs and so on.

Adding event Handlers:

To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag. For example, here is a button that doesn’t do anything yet:

export default function Button() {
  return (
    <button>
      I don't do anything
    </button>
  );
}

You can make it show a message when a user clicks by following these three steps:

Declare a function called handleClick inside your Button component.
Implement the logic inside that function (use alert to show the message).
Add onClick={handleClick} to the <button> JSX.

export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}



 */