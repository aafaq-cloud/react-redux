// Redux logic
// Import redux object from redux package
// import redux from 'redux';
// OR
// Pull createStore from redux package
import { createStore } from 'redux';

// Create reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    // Handle different actions and return latest snapshot
    if (action.type === 'increment') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'decrement') {
        return { counter: state.counter - 1 }
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
