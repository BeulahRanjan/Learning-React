/*
Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!

A React component is a JavaScript function that you can sprinkle with markup. 
For Example: 
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
- The export default prefix is a standard JavaScript syntax . It lets you mark the main function in a file so that you can later import it from other files.
- With function Profile() { } you define a JavaScript function with the name Profile.
- The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.
     Return statements can be written all on one line, as in this component:  
      return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"
      
      But if your markup isn’t all on the same line as the return keyword, you must wrap it in a pair of parentheses:
        return (
         <div>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
         </div>
);

- Now that you’ve defined your Profile component, you can nest it inside other components. For example, 
    export default function Gallery() {
        return (
            <section>
                <h1>Amazing scientists</h1>
                <Profile />
                <Profile />
                <Profile />
            </section>
        );
    }

- Notice the difference in casing:
<section> is lowercase, so React knows we refer to an HTML tag.
<Profile /> starts with a capital P, so React knows that we want to use our component called Profile.
And Profile contains even more HTML: <img />. In the end, this is what the browser sees:
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>

- Components are regular JavaScript functions, so you can keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other. If this file gets crowded, you can always move Profile to a separate file. You will learn how to do this shortly on the page about imports.
- Because the Profile components are rendered inside Gallery—even several times!—we can say that Gallery is a parent component, rendering each Profile as a “child”.
*/