import React from 'react';
/**
 * PROVIDING THE REDUX
 */

// Import package from react-redux
// Provider Component
import { Provider } from 'react-redux';

// Import store to provide via provider component
import store from './store/index';

import Counter from './components/Counter';

function App() {
  return (
    // Wrap Provider Component
    // App Wide State

    // To tell Redux which store we wanna provide
    // On Provider Component have a store prop
    // Value of our redux store which is imported
    // Hence we provide store to React App
    // Now any component inside App can tap into that store. They can get data out of the store. They can setup a subscription to that data to be precise and they can also dispatch actions.
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
