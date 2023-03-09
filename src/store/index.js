// Redux logic
// Import redux object from redux package
// import redux from 'redux';
// OR
// Pull createStore from redux package
import { createStore } from 'redux';

// Create reducer function
/**
 * WORKING WITH MULTIPLE STATE PROPERTIES
 * For this, we need to add a new state a new piece of data to our Redux store. And how do we now do that? Well, to add a new piece of data, we need to go to our reducer in the end and just add it to all these state snapshots which we are producing. Let's start with the initial state snapshot.
 */

const initialState = { counter: 2, showCounter: true };

// const counterReducer = (state = { counter: 2, showCounter: true }, action) => {
const counterReducer = (state = initialState, action) => {
  // Handle different actions and return latest snapshot
  if (action.type === 'increment') {
    //   Now when we increment, we are changing the counter, we don't care about showCounter.
    // We still need to set the showCounter property here though because we are returning the overall state object and Redux won't merge your changes with the existing state.
    //   It instead takes what you return and replaces the existing state with it.
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === 'decrement') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'increase') {
    //   Hardcode
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      // Keep the existing state
      counter: state.counter,
      // Invert the value
      showCounter: !state.showCounter,
    };
  }

  // Default return
  return state;
};

// Create store
// Create store wants a pointer at a reducer function as a parameter
// This now creates our Redux store
const store = createStore(counterReducer);

// CONNECT OUR REACT APP WITH REDUX STORE SO THAT COMPONENTS OF THAT APP CAN DISPATCH AND LISTEN AND THAT'S NOW THE NEW PART
// FOR THIS EXPORT THIS STORE WHICH WE CREATED ABOVE

// Miss these steps
// Create subscriber
// const counterSubscriber = () => {
//     const latestState = store.getState();

//     console.log(latestState);
// };

// // Subscription
// store.subscribe(counterSubscriber);

// // Dispatch action
// store.dispatch({ type: 'increment' });

// How to connect store with React App?
// For this we need to provide this store to the React App/.
// The question just is what does provide mean?
export default store;

// To provide our Redux store to the React app, we typically go into this index JS file, where we rendered the entire app. So to the highest level we can go, in our react application, to the top of our component tree, where we render this root component. And now here, we can import from react Redux. So not from Redux, but from react Redux. And what we import here, is now the provider component. This is actually a component. And now we wrap, all our root component, with provider, a little bit, as we used our own context provider components. If you recall that from earlier in the course. We also build our own context, provider components, using react context, and we wrapped our app or a part of our app with that as well. We're basically doing the same here, and you don't have to use provider on this highest component level. You could also wrap nested components with provider, but only wrapped components and their child components, and the child components of the child components, and so on. Only those components will have access to Redux thereafter. And if the vast majority of your components need access to the store, if maybe your entire app, needs access to the store, you should typically provide, on this highest level. Now just by wrapping Provider around app, we're not telling react Redux and react therefore, which store we wanna provide. Sure. We only have one store, but that's stored in this index JS file, react Redux of course doesn't know that data file holds our store. Instead we have to import our store from, store index in this case. So that store, which we're exporting in there, we're importing this into index JS, and on this provider, which we import from react Redux. We have a store prop, which we have to set. And this one's a value, a value which is our Redux store. So this store, which we're importing here, we're setting this as a value, for the store prop on this provider component. And that now provides our Redux store, cue this react app. Now on its own, that doesn't do much. Now to store is provided, but that doesn't change anything at the moment. But now our components in this app, the app component, and any other child components, can tap into that store. They can get data out of the store. They can set up a subscription to that data to be precise, and they also can dispatch actions. And that's what we're therefore going to do next.
