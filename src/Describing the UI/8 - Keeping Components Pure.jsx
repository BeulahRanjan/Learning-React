/*
Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.

Purity: Components as formulas
In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

It minds its own business. It does not change any objects or variables that existed before it was called.
Same inputs, same output. Given the same inputs, a pure function should always return the same result.

React is designed around this concept. React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs:

function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

When you pass drinkers={2} to Recipe, it will return JSX containing 2 cups of water. Always.

If you pass drinkers={4}, it will return JSX containing 4 cups of water. Always.

Just like a math formula.

You could think of your components as recipes: if you follow them and don’t introduce new ingredients during the cooking process, you will get the same dish every time. That “dish” is the JSX that the component serves to React to render.

Side Effects: (un)intended consequences
React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

Output:Tea cup for guest #2
Tea cup for guest #4
Tea cup for guest #6
Bcause In development mode, React (especially with Strict Mode) intentionally calls components twice to detect bugs.

👉 So each <Cup /> runs 2 times

This component is reading and writing a guest variable declared outside of it. This means that calling this component multiple times will produce different JSX! And what’s more, if other components read guest, they will produce different JSX, too, depending on when they were rendered! That’s not predictable.
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
Now your component is pure, as the JSX it returns only depends on the guest prop.
 
Local mutation: Your component’s little secret
In the above example, the problem was that the component changed a preexisting variable while rendering. This is often called a “mutation” to make it sound a bit scarier. Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure!

However, it’s completely fine to change variables and objects that you’ve just created while rendering. In this example, you create an [] array, assign it to a cups variable, and then push a dozen cups into it:
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

Output:
Tea cup for guest #1
Tea cup for guest #2
Tea cup for guest #3
Tea cup for guest #4
Tea cup for guest #5
Tea cup for guest #6
Tea cup for guest #7
Tea cup for guest #8
Tea cup for guest #9
Tea cup for guest #10
Tea cup for guest #11
Tea cup for guest #12

If the cups variable or the [] array were created outside the TeaGathering function, this would be a huge problem! You would be changing a preexisting object by pushing items into that array.

However, it’s fine because you’ve created them during the same render, inside TeaGathering. No code outside of TeaGathering will ever know that this happened. This is called “local mutation”—it’s like your component’s little secret.

Where you can cause side effects 
While functional programming relies heavily on purity, at some point, somewhere, something has to change. That’s kind of the point of programming! These changes—updating the screen, starting an animation, changing the data—are called side effects. They’re things that happen “on the side”, not during rendering.

In React, side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.

If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a useEffect call in your component. This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.

When possible, try to express your logic with rendering alone. You’ll be surprised how far this can take you!

“Rendering in React is when the component re-evaluates JSX based on state. By placing conditions inside JSX, we let rendering handle the logic of what to display instead of writing separate control flow.

Local mutation inside a component is acceptable if it’s done on temporary variables created during rendering. React only discourages mutation of state or props, because that breaks reactivity.

Because React re-renders by calling the component function again, all local variables inside it are recreated on every render.

React does not preserve local variables between renders. It only preserves state and refs. That’s why local mutation is safe—it doesn’t persist.

React can render twice because of Strict Mode in development.

🔹 The Real Reason (Most Likely in Your Case)

If you’re using React (especially newer versions), your app is probably wrapped like this:

<React.StrictMode>
  <App />
</React.StrictMode>

👉 In development only, React intentionally calls your component twice.

🔥 Why React does this

👉 To detect bugs like:

Side effects inside render
Unexpected mutations
Impure functions

So React does:

TeaGathering(); // first render
TeaGathering(); // second render (to check consistency)

 Then it throws away one result
When React actually re-renders (real cases)

Outside Strict Mode, rendering happens when:

State changes
Props change
Parent re-renders

Directly mutating state does not properly persist across renders because React doesn’t detect the change. State should always be updated using setState so that React can track the change and trigger a re-render.
State is stored internally by React, but directly mutating it doesn’t trigger a re-render. React relies on setState to detect changes, so without it, the UI won’t update even though the value changed in memory.
*/
/