// Import a custom hook made by react redux team
/**
 * There also is use store hook, which we could use as well which gives us direct access to the store but useSelector is a bit more convenient to use because that allows us to then automatically select a part of our state managed by the store.
 */
import { useSelector } from 'react-redux';
// import {useStore} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // We can get access to the data manages in our store by using useSelector() hook
  // We call this so now pass a function to this hook
  // A function which will be executed by a React Redux. A function which then basically determines which piece of data we wanna extract from our store.
  // Of course at the moment we have a very simple state just an object with a counter property
  // But in bigger applications, you will have more complex states with tons of different properties maybe nested objects and arrays and therefore being able to just get a slice just a tiny part of that overall state object in a easy way is worth a lot.
  // And that's what useSelector allows us to do. For this we should pass a function to it, a function of which we'll receive the state managed by Redux and then we return the part of the state which you wanna extract.
  // Callback function
  // Extract a slice of state
  // Again this function will be executed for us by React Redux. It will then pass the Redux state so that manage the data into this function when it executes it and then basically executes this code to retrieve the part of the state which you need in this component.
  // And then useSeelctor therefore overall gives us that returned value.
  // So we get a counter constant which is the counter managed by Redux.
  // Note: Now the great thing is that when you use use selector, React Redux will automatically set up a subscription to the Redux store for this component.
  // So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store. So it's an automatically reactive and changes to the Redux store will cause this component function to be re executed.
  // So you always have the latest counter. That's why use selector is a very useful hook and why it is the hook we use for getting data out of the store.
  // If you ever would unmount this component if it would be removed from the DOM for whatever reason, React Redux would also automatically clear the subscription for you. So it manages that subscription for you behind the scenes
  // Store return value
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* Output current counter */}
      {/* For this import something from react-redux package and something is a React Hook i.e useSelector */}
      
      {/* Now that we got this counter, we can use it down there, to output the counter value like this. And if we now save this, we therefore now see zero here. */}
      {/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
      {/* RESULT: And that's how we can get access to data managed by Redux. */}
      {/* Of course the question now is how we can change that data? How can we dispatch actions? */}
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
