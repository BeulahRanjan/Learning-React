/*
React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
Props can be used to pass any JavaScript  value through them, including objects, arrays, and functions.

Familiar props

Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}



 */