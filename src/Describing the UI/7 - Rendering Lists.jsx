/*
Rendering data from arrays 

Say that you have a list of content.
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images. In these situations, you can store that data in JavaScript objects and arrays and use methods like map() and filter() to render lists of components from them.

Here’s a short example of how to generate a list of items from an array:

Move the data into an array:
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
Map the people members into a new array of JSX nodes, listItems:
const listItems = people.map(person => <li>{person}</li>);
Return listItems from your component wrapped in a <ul>:
return <ul>{listItems}</ul>;
 
Each child in a list should have a unique "key" prop.

Check the render method of `List`. See https://react.dev/link/warning-keys for more information.
Notice the sandbox above displays a console error:

Console
Warning: Each child in a list should have a unique “key” prop.

Before we tesolve the error, let’s add some structure to your data.

Filtering arrays of items 

This data can be structured even more.

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
Let’s say you want a way to only show people whose profession is 'chemist'. You can use JavaScript’s filter() method to return just those people. This method takes an array of items, passes them through a “test” (a function that returns true or false), and returns a new array of only those items that passed the test (returned true).

You only want the items where profession is 'chemist'. The “test” function for this looks like (person) => person.profession === 'chemist'. Here’s how to put it together:

Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
Now map over chemists:
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);

Lastly, return the listItems from your component:
return <ul>{listItems}</ul>;

Each child in a list should have a unique "key" prop.

Check the render method of `List`. See https://react.dev/link/warning-keys for more information.

*/