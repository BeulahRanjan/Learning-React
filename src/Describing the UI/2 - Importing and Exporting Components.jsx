/*function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

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
  These currently live in a root component file, named App.js in this example. Depending on your setup, your root component could be in another file, though. If you use a framework with file-based routing, such as Next.js, your root component will be different for every page.
 
  What if you want to change the landing screen in the future and put a list of science books there? Or place all the profiles somewhere else? It makes sense to move Gallery and Profile out of the root component file. This will make them more modular and reusable in other files. You can move a component in three steps:

Make a new JS file to put the components in.
Export your function component from that file (using either default or named exports).
Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).
Here both Profile and Gallery have been moved out of App.js into a new file called Gallery.js.
App.js
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}

Gallery.js
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
  
App.js:
Imports Gallery as a default import from Gallery.js.
Exports the root App component as a default export.

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
Gallery.js:
Defines the Profile component which is only used within the same file and is not exported.
Exports the Gallery component as a default export.
  */