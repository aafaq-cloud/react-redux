import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';

// Import package from react-redux
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    // Wrap Provider Component
    // App Wide State

    // To tell Redux which store we wanna provide
    // On Provider Component have a store prop
    // Value of our redux store which is imported
    // Hence we provide store to React App
    // Now any component inside App can tap into that store. They can get data out of the store. They can setup a subscription to that data to be precise and they can also dispatch actions.
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
