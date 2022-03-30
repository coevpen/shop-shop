import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

// instantiates our initial global state
const StoreProvider = ({ value = [], ...props }) => {
    // state is the most up-to-date versino of global state object, dispatch is method to update state
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };