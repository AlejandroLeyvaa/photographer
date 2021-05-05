import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  function addUser(payload) {
    setState({
      ...state,
      user: Object.assign(state.user, payload),
    });
  };

  return{
    state,
    addUser,
  }

};

export default useInitialState;
