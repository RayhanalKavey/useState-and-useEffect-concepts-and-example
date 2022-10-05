## useState

- The useState hook allows us to reack state in a function component
- To use the useState hook, you need to know a few things.
  - must import it from the react library
  - must invoke it inside a react component

### Set useState's set value as an object, changing the objects value from the input field with an click event handler :-

```
  const [user, setUser] = useState({
    name: "Input you name",
    email: "Use your email",
  });
  const handleInput = (event) => {
    // user[event.target.id] = event.target.value;
    setUser((current) => {
      return { ...current, [event.target.id]: event.target.value };
    });
  };
```

## useEffect

- The useEffect hook allows you to perform side effects in your components. Some examples of side effects are : fetching data, directly updating the DOM, and timers.
- To use the useEffect hook, we need to know a few things

  - We import useEffect from ‘react’

  - We call it above the returned JSX in our component

  - We usually pass two arguments: a function and an array

### Make url dynamic with the random number, random number is the dependency, means when we change the random number the url will be called again :-

```
 const [post, setPost] = useState({});
  const [rNumber, setRNumber] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${rNumber}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [rNumber]);
  // console.log(post);
  const handleNewPost = () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    setRNumber(randomNumber);
  };
```
